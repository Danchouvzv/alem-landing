import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Производство мебели',
      desc: 'Мы предоставляем услуги по производству офисной мебели, гарантируя высокое качество и современный дизайн для вашего рабочего пространства.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="32" r="12" />
          <path d="M32 16V12" /><path d="M32 52V48" />
          <path d="M16 32H12" /><path d="M52 32H48" />
          <path d="M20.7 20.7L17.9 17.9" /><path d="M46.1 46.1L43.3 43.3" />
          <path d="M43.3 20.7L46.1 17.9" /><path d="M17.9 46.1L20.7 43.3" />
          <circle cx="32" cy="32" r="6" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Дизайн мебели',
      desc: 'Мы предлагаем услуги по созданию дизайна мебели, чтобы ваш офис выглядел стильно и современно.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="14" width="36" height="30" rx="2" />
          <path d="M14 24H50" />
          <path d="M30 40L36 30L42 40" />
          <path d="M22 38L28 30" />
          <circle cx="24" cy="32" r="2" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Проектирование пространств',
      desc: 'Мы проектируем офисные пространства, предлагая оптимальные решения по расстановке мебели для максимального удобства и эффективности.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="16" width="40" height="28" rx="2" />
          <path d="M12 24H52" />
          <path d="M20 24V44" />
          <path d="M36 32H44" />
          <path d="M36 38H44" />
          <rect x="24" y="28" width="8" height="8" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Сборка мебели',
      desc: 'Мы предоставляем услуги сборки мебели, обеспечивая быстрое и качественное выполнение работ.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 40L16 48" />
          <path d="M12 44L20 52" />
          <path d="M40 24L48 16" />
          <path d="M44 12L52 20" />
          <path d="M28 36L36 28" />
          <path d="M20 28L36 44" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Бесплатная доставка',
      desc: 'Мы предлагаем бесплатную доставку, чтобы обеспечить вам максимально удобный и приятный опыт покупки.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="20" width="30" height="22" rx="2" />
          <path d="M38 28H48L54 36V42H38V28Z" />
          <circle cx="20" cy="46" r="4" />
          <circle cx="46" cy="46" r="4" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Послепродажное обслуживание',
      desc: 'Мы предоставляем послепродажное обслуживание, гарантируя поддержку и помощь после покупки.',
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M40 20C40 14 36 10 32 10C28 10 24 14 24 20" />
          <path d="M20 28V24C20 24 20 20 24 20" />
          <path d="M44 28V24C44 24 44 20 40 20" />
          <path d="M18 28C16 28 14 30 14 32V36C14 38 16 40 18 40" />
          <path d="M46 28C48 28 50 30 50 32V36C50 38 48 40 46 40" />
          <path d="M46 40C46 48 40 52 32 52" />
          <circle cx="32" cy="54" r="2" />
        </svg>
      )
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="services-title">Наши услуги</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
