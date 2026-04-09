import { useEffect, useMemo, useState } from 'react'
import { fetchAllOffers, fetchRequests } from '../utils/fetchSheets'
import { searchAll, searchRequests as searchRequestsUtil, searchOffers as searchOffersUtil } from '../utils/searchUtils'
import RequestCard from './RequestCard'
import OfferCard from './OfferCard'
import Instructions from './Instructions'

import Footer from './Footer'

// ================================================
// CONSTANTES
// ================================================

const MAX_PAGE_SIZE = 5
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000

// ================================================
// FUNCIONES AUXILIARES
// ================================================

const parseDate = (value) => {
  if (!value) return null
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

const isRecentRequest = (request) => {
  const date = parseDate(request.createdAt)
  if (!date) return false
  return Date.now() - date.getTime() <= ONE_WEEK_MS
}

const hasIndexedExcel = (request) => Boolean(request.attachments?.trim())

// ================================================
// SEPARACIÓN DE OFERTAS
// ================================================

const separateOffers = (offers, requests) => {
  const requestIds = new Set(requests.map((r) => r.id))

  const offersByRequest = new Map()
  const independentOffers = []

  offers.forEach((offer) => {
    if (offer.requestID && requestIds.has(offer.requestID)) {
      if (!offersByRequest.has(offer.requestID)) {
        offersByRequest.set(offer.requestID, [])
      }
      offersByRequest.get(offer.requestID).push(offer)
    } else {
      independentOffers.push(offer)
    }
  })

  return { offersByRequest, independentOffers }
}

// ================================================
// COMPONENTE PRINCIPAL
// ================================================

function Main({ searchQuery }) {

  // ================================================
  // ESTADOS
  // ================================================

  const [requests, setRequests] = useState([])
  const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState('Todos')
  const [activeSection, setActiveSection] = useState('instructions')

  // ================================================
  // CARGA DE DATOS
  // ================================================

  const loadRequests = async () => {
    setLoading(true)
    setError('')

    try {
      const [requestsData, offersData] = await Promise.all([
        fetchRequests(),
        fetchAllOffers(),
      ])

      setRequests(requestsData)
      setOffers(offersData)
      setPage(1)
    } catch (fetchError) {
      setError(fetchError?.message || 'Error al cargar datos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadRequests()
  }, [])

  // ================================================
  // CONTROL HASH (#offers, #requests, #instructions)
  // ================================================

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      setActiveSection(hash || 'instructions')
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // ================================================
  // FILTROS
  // ================================================

  const visibleRequests = useMemo(() => {
    return requests
      .filter((r) => hasIndexedExcel(r) && isRecentRequest(r))
      .sort((a, b) => {
        const dateA = parseDate(a.createdAt)?.getTime() || 0
        const dateB = parseDate(b.createdAt)?.getTime() || 0
        return dateB - dateA
      })
  }, [requests])

  const historyRequests = useMemo(() => {
    return requests
      .filter((r) => !hasIndexedExcel(r) || !isRecentRequest(r))
      .sort((a, b) => {
        const dateA = parseDate(a.createdAt)?.getTime() || 0
        const dateB = parseDate(b.createdAt)?.getTime() || 0
        return dateB - dateA
      })
  }, [requests])

  // Nueva lógica de búsqueda usando searchUtils (busca en TODOS los campos)
  const filteredOpenRequests = useMemo(() => {
    const query = searchQuery.trim()
    
    // Primero aplicar búsqueda en todos los campos
    const afterSearch = query
      ? searchRequestsUtil(query, visibleRequests)
      : visibleRequests

    // Luego aplicar filtro de status
    return afterSearch.filter((request) => {
      const matchesStatus =
        statusFilter === 'Todos' ||
        (statusFilter === 'Pendientes' &&
          request.status?.toLowerCase() === 'pendiente') ||
        (statusFilter === 'En revisión' &&
          request.status?.toLowerCase().includes('revisión'))
      return matchesStatus
    })
  }, [visibleRequests, searchQuery, statusFilter])

  // Nueva búsqueda para ofertas (cuando hay query activo)
  const filteredSearchOffers = useMemo(() => {
    const query = searchQuery.trim()
    if (!query) return []
    return searchOffersUtil(query, offers)
  }, [offers, searchQuery])

  // ================================================
  // PAGINACIÓN
  // ================================================

  const pageCount = Math.max(1, Math.ceil(filteredOpenRequests.length / MAX_PAGE_SIZE))

  const pagedRequests = filteredOpenRequests.slice(
    (page - 1) * MAX_PAGE_SIZE,
    page * MAX_PAGE_SIZE
  )

  // ================================================
  // OFERTAS
  // ================================================

  const { offersByRequest, independentOffers } = separateOffers(offers, requests)

  const sortedIndependentOffers = useMemo(() => {
    return [...independentOffers].sort((a, b) => {
      const dateA = parseDate(a.date)?.getTime() || 0
      const dateB = parseDate(b.date)?.getTime() || 0
      return dateB - dateA
    })
  }, [independentOffers])

  const offerCount = offers.length
  const executedBudgetLabel = 'Resumen general de ofertas'

  // ================================================
  // CONTROLES
  // ================================================

  const handlePrevious = () => setPage((p) => Math.max(1, p - 1))
  const handleNext = () => setPage((p) => Math.min(pageCount, p + 1))

  // ================================================
  // RENDER
  // ================================================

  // Si es la sección de instructions, mostrar solo ese componente
  if (activeSection === 'instructions') {
    return (
      <main className="main-content">
        <Instructions />
        <Footer />
      </main>
    )
  }

  return (
    <main className="main-content">

      

      {/* ============================================
          MÉTRICAS (SIEMPRE VISIBLES)
      ============================================ */}
      <div className="metrics-grid">
        <div className="metric-card justify-content">
          <p className="metric-label">Solicitudes de presupuesto activas</p>
          <strong>{requests.length}</strong>
        </div>

        <div className="metric-card justify-content">
          <p className="metric-label">Ofertas de empresas registradas</p>
          <strong>{offerCount}</strong>
        </div>

        <div className="metric-card metric-status justify-content">
          <p className="metric-label">Estado sitio web</p>
          <strong className="status-ok">OPERATIVO</strong>
        </div>
      </div>
      
      {/* ============================================
    BARRA DE ACCIONES
============================================ */}
    <div className="filter-bar">

      {/* FILTROS (SIEMPRE VISIBLES) */}
      <div className="filter-actions">
       {/*  {['Todos', 'Pendientes', 'En revisión'].map((option) => (
          <button
            key={option}
            className={`button secondary filter-button ${statusFilter === option ? 'active' : ''}`}
            onClick={() => setStatusFilter(option)}
          >
            {option}
          </button>
        ))} */}
      </div>

      {/* BOTONES DERECHA */}
      <div className="filter-actions-right">

        {/* ACTUALIZAR SIEMPRE */}
        <button className="button secondary" onClick={loadRequests}>
          🔄 Actualizar
        </button>

        {/* SOLO EN OFERTAS */}
        {activeSection === 'offers' && (
          <a
            className="button create-offer-button cta-button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf9R6ZG6NS5PEk7xSs86eFgzqR7vA5WY9SGzcDhcsLqhO3vsA/viewform"
            target="_blank"
            rel="noreferrer"
          >
            Crear oferta
          </a>
        )}

        {/* SOLO EN PEDIDOS */}
        {activeSection !== 'offers' && (
          <a
            className="button create-offer-button cta-button"
            href="https://docs.google.com/forms/d/e/1FAIpQLScYToCNvXaOpi6o8jSNBmkpDo0XATNkRhZD-XaFXH5fL15UWg/viewform?usp=dialog"
            target="_blank"
            rel="noreferrer"
          >
            Crear pedido de presupuesto
          </a>
        )}

      </div>
    </div>
    <div className="dashboard-header">
        <h2>Presupuestos y Ofertas</h2>
      </div>

      {/* ============================================
          RESULTADOS DE BÚSQUEDA (DOS COLUMNAS)
      ============================================ */}
      {searchQuery.trim() && (
        <div className="search-results-two-columns">
          {/* COLUMNA IZQUIERDA: PEDIDOS */}
          <div className="search-column">
            <div className="search-column-header">
              <h3>Pedidos de Presupuesto</h3>
              <span className="search-column-badge">{filteredOpenRequests.length}</span>
            </div>
            {filteredOpenRequests.length > 0 ? (
              <div className="request-grid">
                {filteredOpenRequests.map((request) => (
                  <RequestCard
                    key={request.id}
                    request={request}
                    associatedOffers={offersByRequest.get(request.id) || []}
                  />
                ))}
              </div>
            ) : (
              <div className="search-empty-state">
                <div className="search-empty-state-icon">📋</div>
                <h4 className="search-empty-state-title">No hay pedidos</h4>
                <p className="search-empty-state-text">
                  No se encontraron pedidos que coincidan con tu búsqueda
                </p>
              </div>
            )}
          </div>

          {/* COLUMNA DERECHA: OFERTAS */}
          <div className="search-column">
            <div className="search-column-header">
              <h3>Ofertas Encontradas</h3>
              <span className="search-column-badge">{filteredSearchOffers.length}</span>
            </div>
            {filteredSearchOffers.length > 0 ? (
              <div className="offers-grid">
                {filteredSearchOffers.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} inline={false} />
                ))}
              </div>
            ) : (
              <div className="search-empty-state">
                <div className="search-empty-state-icon">📦</div>
                <h4 className="search-empty-state-title">No hay ofertas</h4>
                <p className="search-empty-state-text">
                  No se encontraron ofertas que coincidan con tu búsqueda
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================
          OFERTAS (VISTA NORMAL, SIN BÚSQUEDA)
      ============================================ */}
      {!searchQuery.trim() && activeSection === 'offers' && (
        <section id="offers">
          <h3>Ofertas Disponibles</h3> <br />

          <div className="offers-grid">
            {sortedIndependentOffers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} inline={false} />
            ))}
          </div>
        </section>
      )}

      {/* ============================================
          PEDIDOS (VISTA NORMAL, SIN BÚSQUEDA)
      ============================================ */}
      {!searchQuery.trim() && activeSection !== 'offers' && (
        <>
          <section>
            {pagedRequests.map((request) => (
              <RequestCard
                key={request.id}
                request={request}
                associatedOffers={offersByRequest.get(request.id) || []}
              />
            ))}
          </section>

          <section>
            {historyRequests.map((request) => (
              <RequestCard
                key={request.id}
                request={request}
                associatedOffers={offersByRequest.get(request.id) || []}
              />
            ))}
          </section>
        </>
      )}

      {/* PAGINACIÓN - Solo sin búsqueda activa */}
      {!searchQuery.trim() && activeSection !== 'offers' && (
        <div className="pagination-row">
          <button onClick={handlePrevious}>Anterior</button>
          <span>Página {page} de {pageCount}</span>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      )}

      <Footer />
    </main>
  )
}

export default Main