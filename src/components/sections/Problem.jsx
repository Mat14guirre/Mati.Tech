import "../../styles/Problem.css";

const Problem = () => {
  return (
    <section className="problem-section">
      <div className="problem-container">

        <div className="problem-header">
          <h2>
            Muchos negocios pierden oportunidades por no estar bien digitalizados
          </h2>
          <p>
            Hoy la mayoría de los clientes buscan información online antes de decidir.
            Si tu negocio no transmite profesionalismo digital, simplemente eligen a otro.
          </p>
        </div>

        <div className="problem-grid">

          <div className="problem-card">
            <h3>Dependencia total de redes sociales</h3>
            <p>
              Instagram no es una plataforma propia. Si cambia el algoritmo,
              perdés alcance y visibilidad.
            </p>
          </div>

          <div className="problem-card">
            <h3>Falta de organización interna</h3>
            <p>
              Procesos manuales, desorden en clientes o stock,
              pérdida de tiempo operativo.
            </p>
          </div>

          <div className="problem-card">
            <h3>Imagen poco profesional</h3>
            <p>
              Sin una web sólida, tu negocio compite en desventaja
              frente a empresas más digitalizadas.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Problem;