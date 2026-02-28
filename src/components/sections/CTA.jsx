import "../../styles/CTA.css";

const CTA = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/549XXXXXXXXXX?text=Hola%20quiero%20mi%20solucion%20digital",
      "_blank"
    );
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>
          Es momento de profesionalizar tu negocio
        </h2>

        <p>
          Si querés más clientes y procesos más organizados,
          empecemos hoy mismo.
        </p>

        <button onClick={handleWhatsApp}>
          Quiero mi solución digital
        </button>
      </div>
    </section>
  );
};

export default CTA;