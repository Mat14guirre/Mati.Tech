import "../../styles/Process.css";

const Process = () => {
  return (
    <section className="process" id="process">
      <div className="process-container">
        <h2>¿Cómo trabajamos?</h2>
        <p className="process-subtitle">
          Un proceso claro y estructurado para garantizar resultados.
        </p>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Reunión inicial</h3>
            <p>
              Analizamos tu negocio, objetivos y necesidades para definir el alcance del proyecto.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Propuesta y planificación</h3>
            <p>
              Definimos estructura, funcionalidades, tiempos y presupuesto.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Desarrollo</h3>
            <p>
              Construcción del proyecto con revisiones periódicas y comunicación constante.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Entrega y soporte</h3>
            <p>
              Publicación del proyecto y acompañamiento posterior para asegurar correcto funcionamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;