import { useState } from "react";
import "../../styles/Services.css";

const Services = () => {

  const [selectedId, setSelectedId] = useState(null);

  // Tu número de WhatsApp internacional (ejemplo Argentina: 549 + celular sin 0)
  const whatsappNumber = "5493412254035";

  const servicesData = [
    {
      id: 1,
      title: "🌐 Página Web Profesional",
      description: "Ideal para emprendedores y negocios que necesitan presencia online clara y efectiva.",
      features: ["Diseño responsive", "Optimización de velocidad", "SEO básico", "Formulario de contacto"]
    },
    {
      id: 2,
      title: "📊 Web con Base de Datos",
      description: "Perfecta para negocios que necesitan gestión de información y automatización básica.",
      features: ["Todo lo anterior", "Panel de administración", "Gestión de usuarios", "Conexión a base de datos"]
    },
    {
      id: 3,
      title: "⚙️ Sistema a Medida",
      description: "Desarrollo personalizado para procesos internos, automatización y escalabilidad.",
      features: ["Arquitectura personalizada", "Integraciones externas", "Escalabilidad", "Soporte y mantenimiento"]
    }
  ];

  const handleClick = (service) => {
    setSelectedId(service.id); // marca como featured
    const message = encodeURIComponent(`Hola! Quiero información sobre: ${service.title}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>Servicios</h2>
        <p className="services-subtitle">
          Soluciones digitales adaptadas al nivel de tu negocio.
        </p>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`service-card ${selectedId === service.id ? "featured" : ""}`}
            >
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul>
                {service.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <button onClick={() => handleClick(service)}>
                Solicitar información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;