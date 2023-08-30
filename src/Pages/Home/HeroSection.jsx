export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Bienvenidos/as a mi Portafolio, soy:</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Patricio</span>
            {""}
            <br />
            Santibáñez
          </h1>
          <p className="hero--section-description">
            En este portafolio presentaré mi perfil profesional,
            <br />
            proyectos desarrollados, aplicaciones creadas y más...
          </p>
          <button className="btn btn-primary">¡Vamos!</button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
