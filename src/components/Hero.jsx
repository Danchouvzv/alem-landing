import './Hero.css'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      
      const offset = 25 // Reduced intensity for smoother effect
      heroRef.current.style.setProperty('--move-x', `${moveX / offset}px`)
      heroRef.current.style.setProperty('--move-y', `${moveY / offset}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Background Ambience */}
      <div className="hero-bg-accent accent-1"></div>
      <div className="hero-bg-accent accent-2"></div>
      
      <div className="container relative-z">
        <div className="hero-grid">
          
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              Complex Office Solutions
            </div>
            
            <h1 className="hero-title">
              Создаем <span className="highlight-text">офисы</span>,<br/>
              где хочется <span className="highlight-text-blue">творить</span>
            </h1>
            
            <p className="hero-subtitle">
              Alem Contract — это синергия эргономики, стиля и функциональности. 
              Мы трансформируем пустые помещения в продуктивные бизнес-пространства мирового уровня.
            </p>

            <div className="hero-actions">
              <button 
                className="btn-hero-primary"
                onClick={() => scrollToSection('contact-form')}
              >
                <span>Обсудить проект</span>
                <div className="btn-icon">→</div>
              </button>
              
              <button 
                className="btn-hero-text"
                onClick={() => scrollToSection('portfolio')}
              >
                Смотреть портфолио
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat-item">
                <span className="stat-value">20+</span>
                <span className="stat-label">Лет опыта</span>
              </div>
              <div className="stat-divider"></div>
              <div className="hero-stat-item">
                <span className="stat-value">500+</span>
                <span className="stat-label">Проектов</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="composition t-parallax">
              {/* Abstract Composition representing Office Elements */}
              <div className="comp-card card-main">
                <div className="card-glass-shine"></div>
                <div className="card-content">
                  <h3>Workspace</h3>
                  <div className="dummy-line w-70"></div>
                  <div className="dummy-line w-50"></div>
                </div>
              </div>
              
              <div className="comp-card card-secondary">
                <div className="card-content">
                  <div className="circle-icon"></div>
                  <div className="dummy-line w-60"></div>
                </div>
              </div>

              <div className="comp-card card-accent">
                <span>Ergonomics</span>
              </div>

              {/* Decorative Elements */}
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="dots-grid"></div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  )
}

export default Hero

