import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Проектирование',
      desc: 'Создаем 3D-модели и планировочные решения, учитывая каждый сантиметр вашего пространства.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      color: '#4e54c8'
    },
    {
      id: 2,
      title: 'Поставка мебели',
      desc: 'Прямые поставки от ведущих европейских и азиатских производителей.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      color: '#ff6b6b'
    },
    {
      id: 3,
      title: 'Custom Мебель',
      desc: 'Изготовление уникальной мебели по индивидуальным эскизам для нестандартных задач.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
        </svg>
      ),
      color: '#fdbb2d'
    },
    {
      id: 4,
      title: 'Сборка и монтаж',
      desc: 'Сертифицированные сборщики быстро и аккуратно соберут всю мебель.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      color: '#20bdff'
    },
    {
      id: 5,
      title: 'Акустика',
      desc: 'Решения для шумоподавления: акустические панели, кабины и перегородки.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      ),
      color: '#11998e'
    },
    {
      id: 6,
      title: 'Обслуживание',
      desc: 'Постгарантийный сервис и ремонт мебели в течение всего срока эксплуатации.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      color: '#8e44ad'
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container relative-z">
        <div className="services-header">
          <span className="services-tag">Комплексный подход</span>
          <h2 className="services-title">Наши услуги</h2>
          <p className="services-subtitle">
            Мы берем на себя все этапы: от первой идеи до финальной уборки после монтажа.
          </p>
        </div>

        <div className="services-grid-creative">
          {services.map((service) => (
            <div key={service.id} className="service-card-3d">
              <div 
                className="service-icon-bg"
                style={{ '--accent-color': service.color }}
              >
                <div className="service-icon" style={{ color: service.color }}>{service.icon}</div>
              </div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              <div className="service-hover-content">
                <span className="arrow-link">Подробнее →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

