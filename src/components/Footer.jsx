import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Alem Contract. Все права защищены.</p>
      </div>
    </footer>
  )
}

export default Footer

