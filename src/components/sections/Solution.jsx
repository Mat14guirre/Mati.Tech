import "../../styles/Solution.css";

const Solution = () => {
  return (
    <section className="solution" id="solution">
      <div className="solution-container">
        <h2>La solución para tu negocio</h2>
        <p className="solution-subtitle">
          Transformo ideas en herramientas digitales que generan resultados reales.
        </p>

        <div className="solution-content">
          <div className="solution-text">
            <h3>¿Cuál es el problema?</h3>
            <p>
              Muchos negocios tienen presencia digital limitada, procesos manuales
              ineficientes o sistemas que no escalan con su crecimiento.
            </p>

            <h3>¿Qué propongo?</h3>
            <p>
              Desarrollo soluciones modernas, optimizadas y escalables que
              automatizan procesos, mejoran la experiencia del usuario y potencian
              la conversión.
            </p>
          </div>

          <div className="solution-highlights">
            <div className="highlight">
              <span>✔</span>
              <p>Más eficiencia operativa</p>
            </div>
            <div className="highlight">
              <span>✔</span>
              <p>Mayor presencia profesional online</p>
            </div>
            <div className="highlight">
              <span>✔</span>
              <p>Escalabilidad a largo plazo</p>
            </div>
            <div className="highlight">
              <span>✔</span>
              <p>Optimización para conversión</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;