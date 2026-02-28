import "../../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5493412254035?text=Hola%20quiero%20mi%20solucion%20digital",
      "_blank"
    );
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>MatiDev</h3>
          <p>
            Soluciones digitales para negocios que quieren crecer,
            vender más y profesionalizar su presencia online.
          </p>
        </div>

        <div className="footer-links">
          <h4>Servicios</h4>
          <ul>
            <li>Presencia Web Profesional</li>
            <li>Plataforma Autogestionable</li>
            <li>Desarrollo a Medida</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <button onClick={handleWhatsApp}>
            Solicitar presupuesto
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {year} MatiDev - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;