import "../../styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Sobre mí</h2>
          <p>
            Soy <strong>Matias Ezequiel Aguirre</strong>, desarrollador web y creador de soluciones digitales a medida. 
            Me especializo en transformar ideas en productos funcionales, desde páginas web simples hasta sistemas completos con base de datos y automatización.
          </p>
          <p>
            Mi objetivo es ayudar a emprendedores y empresas a crecer online, simplificar procesos y llevar su negocio al siguiente nivel.
          </p>
        </div>
        <div className="about-image">
          <img src="/perfil-dev.png" alt="Matias Ezequiel Aguirre" />
        </div>
      </div>
    </section>
  );
};

export default About;