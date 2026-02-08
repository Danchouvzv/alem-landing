import './Contacts.css'

const Contacts = () => {
  return (
    <section id="contacts" className="contacts section">
      <div className="container">
        <div className="contacts-label">НАШИ КОНТАКТЫ</div>
        <div className="contacts-phones">
          <a href="tel:+77001234567" className="phone">+7 (700) 123-45-67</a>
          <a href="tel:+77001234568" className="phone">+7 (700) 123-45-68</a>
        </div>
        <div className="contacts-tagline">
          Создаем комфортные рабочие пространства с 2002 года
        </div>
      </div>
    </section>
  )
}

export default Contacts

