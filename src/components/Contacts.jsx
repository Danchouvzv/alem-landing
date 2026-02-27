import './Contacts.css'

const Contacts = () => {
  return (
    <section id="contacts" className="contacts section">
      <div className="container">
        <div className="contacts-label">НАШИ КОНТАКТЫ</div>
        <div className="contacts-phones">
          <a href="tel:+77472501818" className="phone">+7 747 250 1818</a>
          <a href="tel:+77472501881" className="phone">+7 747 250 1881</a>
        </div>
        <div className="contacts-tagline">
          Alem Contact – стандарт качества в офисной мебели
        </div>
      </div>
    </section>
  )
}

export default Contacts

