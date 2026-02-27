import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-layout">
          <div className="about-text">
            <h2 className="about-title">О нашей компании</h2>
            <p className="about-description">
              Мы, компания Alem Contract, основанная в 2002 году, 
              специализируемся на продаже офисной мебели и имеем 
              богатый опыт в данной области. Мы успешно сотрудничаем 
              с иностранными представительствами и казахстанскими 
              компаниями, поставляя им качественную мебель. За годы 
              работы мы оставили тысячи довольных клиентов. Наш 
              приоритет — это комфорт и удовлетворение наших 
              заказчиков.
            </p>
          </div>
          <div className="about-photos">
            <div className="photo-grid">
              <div className="photo-item">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" alt="Офисное кресло" />
              </div>
              <div className="photo-item">
                <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop" alt="Офисное пространство" />
              </div>
              <div className="photo-item">
                <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop" alt="Конференц-зал" />
              </div>
              <div className="photo-item">
                <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?w=400&h=300&fit=crop" alt="Современный офис" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
