import "../../styles/Hero.css";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5493412254035?text=Hola%20quiero%20mi%20solucion%20digital",
      "_blank",
    );
  };

  const handleScroll = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Desarrollo web y <span>Sistemas a medida</span>
          </h1>

          <p>
            Creamos plataformas modernas y sistemas inteligentes para que tu
            negocio crezca, venda más y trabaje mejor.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={handleWhatsApp}>
              Solicitar presupuesto
            </button>

            <button className="secondary-btn" onClick={handleScroll}>
              Ver soluciones
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="projects-grid">
            {/* El mockup principal (ahora es parte de la grilla) */}
            <div className="grid-item mockup-main">
              <div className="mockup-box">
                <div className="mockup-screen">
                  <img src="/mockup-dev.png" alt="Dashboard" />
                </div>
              </div>
            </div>

            {/* Imágenes de trabajos realizados (los "cuadrados verdes") */}
            <div className="grid-item work-1">
              <img
                src="/trabajo.png"
                alt="Trabajo 1"
              />
            </div>
            <div className="grid-item work-2">
              <img
                src="/trabajo4.png"
                alt="Trabajo 2"
              />
            </div>
            <div className="grid-item work-3">
              <img
                src="/trabajo5.png"
                alt="Trabajo 3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
