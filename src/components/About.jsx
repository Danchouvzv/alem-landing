import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      {/* Abstract Background Element */}
      <div className="about-bg-text">ALEM</div>

      <div className="container relative-z">
        <div className="about-layout-creative">
          
          <div className="about-visual-side">
            <div className="image-collage">
              <div className="collage-item item-main">
                <div className="collage-overlay"></div>
                <span className="collage-label">Office Design</span>
              </div>
              <div className="collage-item item-secondary">
                <div className="collage-overlay"></div>
                <span className="collage-label">Ergonomics</span>
              </div>
              <div className="collage-deco-box"></div>
              <div className="collage-dots"></div>
            </div>
          </div>

          <div className="about-content-side">
            <div className="section-tag">О нас</div>
            <h2 className="about-headline">
              Мы создаем среду для <br/>
              <span className="highlight-word">роста</span> и <span className="highlight-word">успеха</span>
            </h2>
            
            <div className="about-description">
              <p className="lead-paragraph">
                Alem Contract — это больше, чем просто мебель. Это архитектура комфорта. 
                Мы проектируем пространства, которые вдохновляют сотрудников и впечатляют клиентов.
              </p>
              <p>
                Бизнес меняется, и офис должен меняться вместе с ним. 
                От эргономичных кресел до сложных акустических решений — мы знаем, 
                как сделать рабочее место инструментом продуктивности.
              </p>
            </div>

            <div className="about-values">
              <div className="value-item">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12H12.01" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="value-info">
                  <h4>Экспертиза</h4>
                  <p>Глубокое понимание эргономики</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="value-info">
                  <h4>Партнерство</h4>
                  <p>Сопровождение на всех этапах</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#0056b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="value-info">
                  <h4>Скорость</h4>
                  <p>Оперативная поставка и сборка</p>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <span className="cta-text">Готовы обсудить ваш проект?</span>
              <a href="#contact-form" className="cta-link">Связаться с нами →</a>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About

