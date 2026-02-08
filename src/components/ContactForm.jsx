import { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Очищаем ошибку при вводе
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен для заполнения'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Неверный формат телефона'
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Неверный формат email'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: '', phone: '', email: '' })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        const error = await response.json()
        alert('Ошибка при отправке заявки: ' + (error.error || 'Попробуйте позже'))
      }
    } catch (error) {
      console.error('Ошибка:', error)
      alert('Ошибка при отправке заявки. Проверьте подключение к интернету.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="leadform">
      <div className="leadform-overlay"></div>
      <div className="container">
        <div className="leadform-content">
          <h2 className="leadform-title">
            Оставьте заявку<br />и мы свяжемся с вами
          </h2>
          
          {isSuccess && (
            <div className="leadform-success">
              ✓ Заявка отправлена! Мы свяжемся с вами в ближайшее время.
            </div>
          )}
          
          <form className="leadform-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field-wrapper">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Ваше имя"
                  required
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-field-wrapper">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="Телефон"
                  required
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              
              <div className="form-field-wrapper">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="Email"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <button 
                type="submit" 
                className="leadform-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

