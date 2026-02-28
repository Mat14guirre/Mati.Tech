import "../../styles/Results.css";

const Results = () => {
  return (
    <section className="results" id="results">
      <div className="results-container">
        <h2>Resultados que generan impacto</h2>
        <p className="results-subtitle">
          Desarrollo enfocado en rendimiento, conversión y eficiencia.
        </p>

        <div className="results-grid">
          <div className="result-card">
            <h3>+40%</h3>
            <p>Mejora promedio en velocidad de carga</p>
          </div>

          <div className="result-card">
            <h3>+30%</h3>
            <p>Incremento en conversión con landing optimizadas</p>
          </div>

          <div className="result-card">
            <h3>100%</h3>
            <p>Diseños adaptables a dispositivos móviles</p>
          </div>

          <div className="result-card">
            <h3>Optimización</h3>
            <p>Sistemas que reducen tareas manuales y errores operativos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;