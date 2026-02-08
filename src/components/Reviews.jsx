import './Reviews.css'

const Reviews = () => {
  const reviews = [
    {
      text: 'Компания Alem Contact зарекомендовала себя как надежный и профессиональный партнер в реализации проектов по поставке офисной мебели для медицинских центров. Все обязательства выполнены в срок и с высоким качеством. Рекомендуем Alem Contact для дальнейшего сотрудничества.',
      name: 'С.О.Джундубаева',
      position: 'Генеральный директор',
      company: 'INTERTEACH',
      logo: '/images/interteach-logo.png' // Путь к логотипу компании
    },
    {
      text: 'Компания Alem Contact продемонстрировала высокую профессиональность и оперативность в изготовлении и установке мебели для нашего офиса. Все работы были выполнены качественно и в соответствии с нашими пожеланиями. Рекомендуем Alem Contact для дальнейшего сотрудничества.',
      name: 'Оразов К.С.',
      position: 'Начальник СХУиБ',
      company: 'KOMMESK',
      logo: '/images/kommesk-logo.png' // Путь к логотипу компании
    },
    {
      text: 'Компания Alem Contact успешно выполнила работы по поставке офисной мебели для нашего объекта. Все задачи были выполнены с учетом всех наших пожеланий, быстро и профессионально. Рекомендуем Alem Contact для дальнейшего сотрудничества.',
      name: 'Исакаков М.А.',
      position: 'И.о.директора',
      company: 'MEDIKER',
      logo: '/images/mediker-logo.png' // Путь к логотипу компании
    },
    {
      text: 'ТОО «Институт Репродуктивной Медицины» выражает благодарность компании «Alem Contact» за качественное выполнение работ по поставке офисной мебели. Все задачи были выполнены быстро и профессионально, с учетом всех наших пожеланий. Рекомендуем Alem Contact для дальнейшего сотрудничества.',
      name: 'Отрокова С.Б.',
      position: 'Генеральный директор',
      company: 'Институт Репродуктивной Медицины',
      logo: '/images/irm-logo.png' // Путь к логотипу компании
    }
  ]

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <h2 className="reviews-title">Отзывы наших клиентов</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-logo">
                <img 
                  src={review.logo} 
                  alt={`Логотип ${review.company}`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="review-logo-placeholder" style={{ display: 'none' }}>
                  <span>{review.company}</span>
                </div>
              </div>
              <div className="review-content">
                <p className="review-text">{review.text}</p>
              </div>
              <div className="review-author">
                <div className="review-name">{review.name}</div>
                <div className="review-position">{review.position}</div>
                <div className="review-company">{review.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
