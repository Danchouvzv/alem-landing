import './Header.css'

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="header">
      <div className="header-inner">
        <nav className="header-nav">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>О нас</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Услуги</a>
          <a href="#contacts" onClick={(e) => { e.preventDefault(); scrollToSection('contacts') }}>Контакты</a>
        </nav>
        <div className="header-logo" onClick={() => scrollToSection('about')}>
          <svg className="logo-icon" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M24 4L8 40H18L24 26L30 40H40L24 4Z" fill="#C8A951"/>
            <path d="M24 4L30 40H40L24 4Z" fill="#B8963F"/>
          </svg>
          <div className="logo-text-group">
            <span className="logo-line1">ALEM</span>
            <span className="logo-line2">CONTRACT</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
