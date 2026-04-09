
function Instructions() {
  return (
    <section id="instructions" className="instructions-container">
      {/* ========================================
          TÍTULO PRINCIPAL
      ======================================== */}
      <div className="instructions-header">
        <h1 className="instructions-title">
          Guía de uso y funcionamiento del sistema de Presupuestos y Ofertas
        </h1>
        <p className="instructions-subtitle">
          Todo lo que necesitas saber para aprovechar al máximo nuestra plataforma
        </p>
      </div>

      {/* ========================================
          INTRODUCCIÓN
      ======================================== */}
      <section className="instructions-section intro-section">
        <div className="instructions-content">
          <p className="intro-text">
            Esta plataforma permite centralizar tus <strong>pedidos de presupuesto</strong> y recibir 
            <strong> ofertas de proveedores</strong> de manera organizada y eficiente. 
            {/* Olvídate de enviar mails manuales uno a uno y de perder tiempo administrando 
            respuestas dispersas. */}
          </p>
          <p className="intro-text">
            Con nuestro sistema, todo está en un lugar: pedidos y ofertas.
          </p>
        </div>
      </section>

      {/* {========================================
          SECCIÓN 1: ¿QUÉ PROBLEMA RESUELVE?
      ======================================== */}
      {/* {<section className="instructions-section">
        <h2 className="section-title">¿Qué problema resuelve?</h2>
        <p className="section-description">
          Descubre cómo cambiamos la forma de trabajar con proveedores
        </p>

        <div className="problem-solution-container">
          
          <div className="problem-card">
            <div className="problem-icon">❌</div>
            <h3 className="problem-title">Situación actual (manual)</h3>
            <ul className="problem-list">
              <li>Envío manual de correos a múltiples proveedores</li>
              <li>Adjuntar archivos uno por uno</li>
              <li>Esperar respuestas sin orden ni control</li>
              <li>Difícil comparación de ofertas</li>
              <li>Pérdida de tiempo administrativo</li>
              <li>Riesgo de olvidar seguimientos</li>
            </ul>
          </div>

          
          <div className="solution-card">
            <div className="solution-icon">✅</div>
            <h3 className="solution-title">Con nuestra plataforma</h3>
            <ul className="solution-list">
              <li>Centralización en un único lugar</li>
              <li>Visibilidad inmediata de todos los pedidos</li>
              <li>Organización automática de ofertas</li>
              <li>Comparación fácil y rápida</li>
              <li>Reducción drástica de tiempos</li>
              <li>Control total del proceso</li>
            </ul>
          </div>
        </div>
      </section>}
 */}
      {/* ========================================
          SECCIÓN 2: ESTRUCTURA DE LA PLATAFORMA
      ======================================== */}
      {/* <section className="instructions-section">
        <h2 className="section-title">Estructura de la plataforma</h2>
        <p className="section-description">
          Conoce cada parte de nuestro sistema
        </p>

        <div className="structure-grid">
          <div className="structure-card">
            <div className="structure-icon">🎯</div>
            <h3>Encabezado / HEADER</h3>
            <p>Navegación principal e identificación del sistema. Acceso rápido a todas las secciones clave.</p>
          </div>

          <div className="structure-card">
            <div className="structure-icon">📋</div>
            <h3>Bara de navegacion lateral / SIDEBAR</h3>
            <p>Menú de navegación lateral. Cambio rápido entre "Solicitudes" y "Ofertas".</p>
          </div>

          <div className="structure-card">
            <div className="structure-icon">📝</div>
            <h3>SOLICITUDES</h3>
            <p>Lista centralizada de todos tus pedidos de presupuesto. Cada card representa un pedido con sus ofertas asociadas.</p>
          </div>

          <div className="structure-card">
            <div className="structure-icon">💼</div>
            <h3>OFERTAS</h3>
            <p>Sección dedicada para que proveedores publiquen ofertas de insumos. Visualiza ofertas independientes y sus detalles completos.</p>
          </div>

          <div className="structure-card">
            <div className="structure-icon">🎴</div>
            <h3>CARDS</h3>
            <p>Unidades visuales que presentan información clara y permiten crear nuevas solicitudes u ofertas.</p>
          </div>

          <div className="structure-card">
            <div className="structure-icon">🔗</div>
            <h3>Pie de pagina / FOOTER</h3>
            <p>Enlaces institucionales de Modular Homes y navegación rápida a sitio oficial.</p>
          </div>
        </div>
      </section> */}

      {/* ========================================
          SECCIÓN 3: CÓMO CREAR UN PEDIDO
      ======================================== */}
      <section className="instructions-section">
        <h2 className="section-title">Cómo crear un pedido de presupuesto</h2>
        <p className="section-description">
          Sigue estos pasos para generar un nuevo pedido.
        </p>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Haz clic en "Crear pedido de presupuesto" en la seccion solicitar presupuesto</h3>
            <p>Encontrarás este botón en la sección de Solicitudes.</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Completa los campos obligatorios</h3>
            <ul className="step-list">
              <li>📧 <strong>Correo</strong>: Tu email de contacto</li>
              <li>🏢 <strong>Empresa</strong>: Nombre de tu empresa</li>
              <li>📌 <strong>Título</strong>: Nombre breve del pedido</li>
              <li>📄 <strong>Descripción</strong>: Detalles del proyecto</li>
              <li>📁 <strong>Archivo Excel</strong> (obligatorio): Sube especificaciones técnicas</li>
            </ul>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Resultado</h3>
            <p>Se genera automáticamente un pedido visible en la plataforma. Los proveedores con acceso a la plataforma podrán verlo y enviar sus ofertas.</p>
          </div>
        </div>
      </section>

      {/* ========================================
          SECCIÓN 4: CÓMO CREAR UNA OFERTA
      ======================================== */}
      <section className="instructions-section">
        <h2 className="section-title">Cómo crear una oferta</h2>
        <p className="section-description">
          Existen dos tipos de ofertas de proveedores: independientes y relacionadas a pedidos de presupuestos
        </p>

        <div className="offers-types-container">
          {/* Oferta Individual */}
          <div className="offer-type-card">
            <div className="offer-type-header individual">
              <div className="offer-type-icon">🎯</div>
              <h3>Oferta Individual de proveedor</h3>
            </div>
            <div className="offer-type-content">
              <p><strong>Cuándo usarla:</strong> Cuando quieres enviar una oferta independiente por actualizacion de precios sin vincularla a un pedido específico.</p>
              <div className="how-to">
                <p><strong>Cómo crearla:</strong></p>
                <ol className="offer-steps">
                  <li>Ve a la sección <strong>"Ofertas de proveedores"</strong></li>
                  <li>Haz clic en <strong>"Crear oferta"</strong> arriba a la derecha</li>
                  <li>Completa el formulario, <strong>deja vacío</strong> el campo <strong>"ID Pedido"</strong></li>
                  <li>Se mostrará como oferta independiente en el sistema. Su funcion es la de mostrar nuevas ofertas en insumos de los proveedores que deseen publicar una nueva oferta.</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Oferta Relacionada */}
          <div className="offer-type-card">
            <div className="offer-type-header related">
              <div className="offer-type-icon">🔗</div>
              <h3>Oferta Relacionada</h3>
            </div>
            <div className="offer-type-content">
              <p>Los proveedores responden a un pedido de presupuesto específico con su oferta de insumos.</p>
              <p><strong>Cuándo usarla:</strong> Cuando tienes una oferta para dar a un pedido de presupuesto.</p>
              <div className="how-to">
                <p><strong>Cómo crearla:</strong></p>
                <ol className="offer-steps">
                  <li>En la tarjeta del <strong>pedido de presupuesto </strong> en el que quieras responder al pedido  con tu <strong>oferta, </strong></li>
                  <li>Haz clic en <strong>"Crear oferta"</strong> abajo a la derecha del <strong>pedido</strong></li>
                  <li>Completa el formulario, <strong>no borres</strong> el campo <strong>"ID Pedido"</strong></li>
                  <li>Tu oferta se vinculará automáticamente</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="warning-box">
          <div className="warning-icon">⚠️</div>
          <h3 className="warning-title">Advertencia importante</h3>
          <p className="warning-text">
            <strong>No modificar el ID Pedido.</strong> Si alteras o eliminas este identificador, 
            la oferta pierde su vínculo con el pedido original y se verá como oferta independiente. 
            Esto puede causar desorden y pérdida de seguimiento.
          </p>
        </div> */}
      </section>

      {/* ========================================
          SECCIÓN 5: CÓMO FUNCIONA EL SISTEMA ACTUAL
      ======================================== */}
      <section className="instructions-section">
        <h2 className="section-title">Cómo funciona el sistema actual</h2>
        <p className="section-description">
          Una mirada detrás de las cortinas: el flujo real de datos
        </p>

        <div className="workflow-container">
          <div className="workflow-step">
            <div className="workflow-icon">📋</div>
            <div className="workflow-text">
              <h3>Paso 1: Captura</h3>
              <p><strong>Google Forms</strong> captura los datos de pedidos y ofertas</p>
            </div>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-step">
            <div className="workflow-icon">📊</div>
            <div className="workflow-text">
              <h3>Paso 2: Almacenamiento</h3>
              <p><strong>Google Sheets</strong> almacena toda la información de forma organizada</p>
            </div>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-step">
            <div className="workflow-icon">🖥️</div>
            <div className="workflow-text">
              <h3>Paso 3: Consumo</h3>
              <p><strong>Frontend React</strong> consume los datos en tiempo real</p>
            </div>
          </div>

          <div className="workflow-arrow">→</div>

          <div className="workflow-step">
            <div className="workflow-icon">✨</div>
            <div className="workflow-text">
              <h3>Paso 4: Presentación</h3>
              <p><strong>Interfaz visual</strong> renderiza todo automáticamente</p>
            </div>
          </div>
        </div>

        {/* <div className="important-note">
          <p>
            <strong>📌 Nota:</strong> Este sistema es un <strong>prototipo funcional y completamente operativo</strong>. 
            Demuestra que el concepto funciona, pero está diseñado para escalar hacia una solución empresarial completa , funciona solo a modo de ejemplo práctico y demostracion.
          </p>
        </div> */}
      </section>

      {/* ========================================
          SECCIÓN 6: LIMITACIONES ACTUALES
      ======================================== */}
      <section className="instructions-section limitations-section">
        <h2 className="section-title">Limitaciones actuales</h2>
        <p className="section-description">
          Lo que el sistema actual NO incluye 
        </p>

        <div className="limitations-grid">
          <div className="limitation-item">
            <div className="limitation-icon">👤</div>
            <h3>Sin sistema de usuarios</h3>
            <p>No hay login ni roles (admin, proveedor, comprador)</p>
          </div>

          <div className="limitation-item">
            <div className="limitation-icon">🔐</div>
            <h3>Sin autenticación</h3>
            <p>Los datos son públicos en el frontend</p>
          </div>

          <div className="limitation-item">
            <div className="limitation-icon">🔔</div>
            <h3>Sin notificaciones</h3>
            <p>No hay alertas en tiempo real ni emails automáticos</p>
          </div>

          <div className="limitation-item">
            <div className="limitation-icon">🔄</div>
            <h3>Sin automatización</h3>
            <p>Los procesos no se automatizan entre Google Forms y Sheets</p>
          </div>

          <div className="limitation-item">
            <div className="limitation-icon">📈</div>
            <h3>Sin análisis comparativo</h3>
            <p>No hay panel de comparación automática de ofertas. Los archivos excel no se pueden procesar sin backend para comprar precios en las ofertas automaticamente</p>
          </div>

          <div className="limitation-item">
            <div className="limitation-icon">☁️</div>
            <h3>Dependencia de Google</h3>
            <p>Todo está alojado en los servicios de Google y la informacion no es privada</p>
          </div>
        </div>
      </section>

      {/* ========================================
          SECCIÓN 7: POSIBLES FUNCIONALIDADES (PROYECTO COMPLETO)
      ======================================== */}
      {/* <section className="instructions-section features-section">
        <h2 className="section-title">Visión del proyecto completo</h2>
        <p className="section-description">
          Las funcionalidades avanzadas que podrían transformar tu operación
        </p>

        <div className="features-matrix">
          <div className="feature-column">
            <h3 className="feature-category">🏗️ Arquitectura</h3>
            <ul className="features-list">
              <li>Sistema de usuarios con roles diferenciados</li>
              <li>Login seguro con autenticación</li>
              <li>Gestión de permisos y accesos</li>
              <li>Perfiles de administrador, proveedor y comprador</li>
            </ul>
          </div>

          <div className="feature-column">
            <h3 className="feature-category">📬 Comunicación</h3>
            <ul className="features-list">
              <li>Envío automático de mails a proveedores</li>
              <li>Notificaciones en tiempo real</li>
              <li>Sistema de mensajería interna</li>
              <li>Alertas inteligentes y configurables</li>
            </ul>
          </div>

          <div className="feature-column">
            <h3 className="feature-category">📊 Inteligencia</h3>
            <ul className="features-list">
              <li>Panel de comparación de ofertas automático</li>
              <li>Ranking de proveedores</li>
              <li>Dashboard con métricas en tiempo real</li>
              <li>Análisis de precios y tiempos de entrega</li>
            </ul>
          </div>

          <div className="feature-column">
            <h3 className="feature-category">⚙️ Gestión</h3>
            <ul className="features-list">
              <li>Historial completo y auditoría</li>
              <li>Gestión avanzada de proveedores</li>
              <li>Seguimiento de estados</li>
              <li>Integración con sistemas internos</li>
            </ul>
          </div>
        </div>

        <div className="benefits-highlight">
          <h3>Beneficios de la solución completa</h3>
          <div className="benefits-list">
            <div className="benefit-item">
              <span className="benefit-icon">⚡</span>
              <p><strong>Reducción drástica de tiempos:</strong> De horas a minutos</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🎯</span>
              <p><strong>Eliminación de procesos manuales:</strong> Automatización completa</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">🧠</span>
              <p><strong>Mejor toma de decisiones:</strong> Con datos reales y comparativas</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">👁️</span>
              <p><strong>Mayor control:</strong> Visibilidad total del proceso</p>
            </div>
            <div className="benefit-item">
              <span className="benefit-icon">📈</span>
              <p><strong>Escalabilidad:</strong> Crece con tu negocio sin limitaciones</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* ========================================
          SECCIÓN 8: TECNOLOGÍA PROPUESTA
      ======================================== */}
      {/* <section className="instructions-section tech-section">
        <h2 className="section-title">Tecnología propuesta</h2>
        <p className="section-description">
          Stack tecnológico para una solución empresarial robusta
        </p>

        <div className="tech-stack">
          <div className="tech-card">
            <div className="tech-icon">⚙️</div>
            <h3>Backend</h3>
            <p className="tech-options">Node.js + Express / NestJS</p>
            <p className="tech-description">Servidor escalable y de alto rendimiento para gestionar lógica de negocio</p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">🗄️</div>
            <h3>Base de datos</h3>
            <p className="tech-options">PostgreSQL</p>
            <p className="tech-description">Sistema robusto de gestión relacional de datos</p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">🎨</div>
            <h3>Frontend</h3>
            <p className="tech-options">React + TypeScript</p>
            <p className="tech-description">Interfaz moderna, responsive y de fácil mantenimiento</p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">☁️</div>
            <h3>Infraestructura</h3>
            <p className="tech-options">AWS / Vercel / Railway</p>
            <p className="tech-description">Hosting escalable con alta disponibilidad</p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">📦</div>
            <h3>Almacenamiento</h3>
            <p className="tech-options">S3 o similar (AWS)</p>
            <p className="tech-description">Gestión segura de archivos y adjuntos</p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">🔐</div>
            <h3>Seguridad</h3>
            <p className="tech-options">JWT, HTTPS, Validación de datos</p>
            <p className="tech-description">Protección completa de datos y comunicaciones</p>
          </div>
        </div>

        <div className="important-note">
          <p>
            <strong>💡 Nota:</strong> El uso de estas tecnologias puede varias en la planificacion o implementacion segun necesidades tecnicas, no modifica el resultado final.
          </p>
        </div>
        <div className="important-note">
          <p>
            <strong>💡 Importante:</strong> La infraestructura y servicios pagos son necesarios para un entorno profesional. 
            Esto incluye dominios, hosting, certificados SSL y copias de seguridad.
          </p>
          
        </div>
      </section> */}

      {/* ========================================
          SECCIÓN 9: TIEMPO DE DESARROLLO
      ======================================== */}
      {/* <section className="instructions-section timeline-section">
        <h2 className="section-title">Tiempo de desarrollo</h2>
        <p className="section-description">
          Estimación para equipo desarrolladores
        </p>

        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-marker">1️⃣</div>
            <div className="timeline-content">
              <h3>Arquitectura y Documentación</h3>
              <p>Diseño de base de datos, APIs, especificaciones técnicas</p>
              <span className="timeline-duration">1-3 semanas</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">2️⃣</div>
            <div className="timeline-content">
              <h3>Desarrollo Backend</h3>
              <p>APIs REST, autenticación, lógica de negocio</p>
              <span className="timeline-duration">4-6 semanas</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">3️⃣</div>
            <div className="timeline-content">
              <h3>Desarrollo Frontend</h3>
              <p>Componentes React, integración con backend</p>
              <span className="timeline-duration">3-5 semanas</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">4️⃣</div>
            <div className="timeline-content">
              <h3>Integración y Testing</h3>
              <p>Pruebas unitarias, de integración, end-to-end</p>
              <span className="timeline-duration">2-4 semanas</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">5️⃣</div>
            <div className="timeline-content">
              <h3>Deploy y Ajustes</h3>
              <p>Configuración de infraestructura, optimizaciones</p>
              <span className="timeline-duration">1-3 semanas</span>
            </div>
          </div>
        </div>

        <div className="timeline-summary">
          <div className="summary-box">
            <h3>Estimación total: de 15 a 19 semanas</h3>
            <p>Dependiendo de complejidad adicional, requisitos específicos y cambios durante el desarrollo.</p>
          </div>
        </div>
      </section> */}

      {/* ========================================
          SECCIÓN 10: CONCLUSIÓN (ENFOQUE COMERCIAL)
      ======================================== */}
      {/* <section className="instructions-section conclusion-section">
        <h2 className="section-title">Conclusión: Transformación operativa</h2>
        <p className="section-description">
          Por qué tu negocio necesita esta solución ahora
        </p>

        <div className="conclusion-content">
          <div className="conclusion-column">
            <h3 className="column-title">El problema real</h3>
            <p>
              Los procesos manuales de presupuestos generan <strong>ineficiencia operativa</strong>. 
              Cada pedido requiere múltiples emails, seguimientos y coordinación manual entre proveedores. 
              Esto consume tiempo valioso y aumenta riesgos de errores.
            </p>
          </div>

          <div className="conclusion-column">
            <h3 className="column-title">La solución</h3>
            <p>
              Una plataforma centralizada que <strong>reemplaza procesos manuales ineficientes </strong> 
              por un flujo automático, rastreable y escalable. Los proveedores reciben notificaciones 
              automáticas, las ofertas se comparan al instante, y tu equipo se enfoca en decisiones estratégicas.
            </p>
          </div>
        </div>

        <div className="comparison-example">
          <h3>Comparativa de impacto</h3>
          <div className="comparison-grid">
            <div className="comparison-before">
              <h4>❌ ANTES (Manual)</h4>
              <ul>
                <li>Enviar 10–20 mails manuales por pedido</li>
                <li>Esperar respuestas dispersas</li>
                <li>Compilar ofertas en Excel manualmente</li>
                <li>Comparaciones manuales y propensas a errores</li>
                <li>Tiempo promedio: 2-3 horas por pedido</li>
              </ul>
            </div>

            <div className="comparison-arrow">vs</div>

            <div className="comparison-after">
              <h4>✅ DESPUÉS (Automatizado)</h4>
              <ul>
                <li>Crear 1 pedido en la plataforma</li>
                <li>Proveedores reciben notificación automática</li>
                <li>Ofertas llegan centralizadas en el sistema</li>
                <li>Comparaciones automáticas e instantáneas</li>
                <li>Tiempo promedio: 10-15 minutos por pedido</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="final-cta">
          <h3>Resultado: Transformación real</h3>
          <div className="results-grid">
            <div className="result-item">
              <span className="result-value">80%</span>
              <p>Ahorro de tiempo administrativo</p>
            </div>
            <div className="result-item">
              <span className="result-value">100%</span>
              <p>Transparencia del proceso</p>
            </div>
            <div className="result-item">
              <span className="result-value">∞</span>
              <p>Escalabilidad sin límites</p>
            </div>
          </div>
        </div>
      </section> */}
    </section>
  )
}

export default Instructions
