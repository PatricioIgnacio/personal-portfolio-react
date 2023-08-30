export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Formulario</p>
        <h2>Contacto</h2>
        <p className="text-lg">
          En esta sección recibiré un correo electrónico y te contactaré.
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Nombres</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Apellidos</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">E-mail</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Número de Teléfono</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">¿Temas?</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Selecciona uno...</option>
            <option>Desarrollo</option>
            <option>Felicitarme</option>
            <option>Comentarios</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Mensaje</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Escribe tu mensaje..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">Acepto los términos y condiciones</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Enviar</button>
        </div>
      </form>
    </section>
  );
}
