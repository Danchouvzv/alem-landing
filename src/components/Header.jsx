import { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo" onClick={() => scrollToSection('about')}>
          <span className="logo-text">Alem Contract</span>
        </div>
        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>
            <span>О нас</span>
          </a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>
            <span>Услуги</span>
          </a>
          <a href="#clients" onClick={(e) => { e.preventDefault(); scrollToSection('clients') }}>
            <span>Клиенты</span>
          </a>
          <a href="#contacts" onClick={(e) => { e.preventDefault(); scrollToSection('contacts') }}>
            <span>Контакты</span>
          </a>
        </nav>
        <button 
          className={`burger-menu ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header

