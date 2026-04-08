// Footer Modular Homes con 3 secciones: navegación rápida, categorías destacadas, copyright
// Variables: contacto y enlaces de la empresa desde appConfig
import { appConfig } from "../utils/appConfig";

function Footer() {
	const { contactEmail, companyWebsite } = appConfig;

	const footerLinks = [
		{ label: "Inicio", href: "https://modularhomes.com.ar/" },
		{
			label: "La Empresa",
			href: "https://modularhomes.com.ar/la-empresa/",
		},
		{ label: "Clientes", href: "https://modularhomes.com.ar/clientes/" },
		{ label: "Productos", href: "https://modularhomes.com.ar/productos/" },
		{
			label: "Proyectos Destacables",
			href: "https://modularhomes.com.ar/proyectos-destacables/",
		},
		{ label: "Noticias", href: "https://modularhomes.com.ar/noticias/" },
		{ label: "Contacto", href: "https://modularhomes.com.ar/contacto/" },
	];

	const categories = [
		"Empresa",
		"Energía",
		"Litio",
		"Minería",
		"Petroquímica",
		"Productos",
		"Viviendas",
	];

	return (
		<footer className="footer-modular">
			<div className="footer-container">
				{/* Sección 1: Navegación rápida */}
				<div className="footer-section">
					<h4 className="footer-section-title">Navegación</h4>
					<ul className="footer-links">
						{footerLinks.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									target="_blank"
									rel="noreferrer"
									className="footer-link"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Sección 2: Categorías destacadas */}
				<div className="footer-section">
					<h4 className="footer-section-title">Categorías</h4>
					<ul className="footer-categories">
						{categories.map((cat) => (
							<li key={cat} className="footer-category">
								{cat}
							</li>
						))}
					</ul>
				</div>

				{/* Sección 3: Información y copyright */}
				<div className="footer-section">
					<h4 className="footer-section-title">Información</h4>
					<p className="footer-text">
						{contactEmail && (
							<a
								href={`mailto:${contactEmail}`}
								className="footer-link"
							>
								{contactEmail}
							</a>
						)}
					</p>
					<p className="footer-text">
						<a
							href={companyWebsite}
							target="_blank"
							rel="noreferrer"
							className="footer-link"
						>
							Sitio Web
						</a>
					</p>
				</div>
			</div>

			{/* Copyright */}
			<div className="footer-bottom">
				<p className="footer-copyright">
					© 2026 Modular Homes. Todos los derechos reservados.
				</p>
				<a href="#top" className="footer-top-link">
					Subir ↑
				</a>
			</div>
		</footer>
	);
}

export default Footer;
