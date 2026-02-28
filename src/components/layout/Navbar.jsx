import { useState } from "react";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5493412254035?text=Hola%20quiero%20mi%20solucion%20digital",
      "_blank",
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/favicon-matidev.svg" alt="MA Tech" />
        </div>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <button onClick={() => handleScroll("services")}>Servicios</button>
          <button onClick={() => handleScroll("process")}>Proceso</button>
          <button onClick={() => handleScroll("contact")}>Contacto</button>
          <button onClick={() => handleScroll("about")}>Sobre mí</button>


          <button className="cta-btn mobile" onClick={handleWhatsApp}>
            Solicitar presupuesto
          </button>
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <button className="cta-btn desktop" onClick={handleWhatsApp}>
          Solicitar presupuesto
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
