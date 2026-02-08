import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Advantages from './components/Advantages'
import Clients from './components/Clients'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="App">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Clients />
      <Reviews />
      <ContactForm />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App

