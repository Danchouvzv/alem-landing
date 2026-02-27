import './Reviews.css'

const Reviews = () => {
  const reviews = [
    {
      text: 'Компания Alem Contact зарекомендовала себя как надежный и профессиональный партнер в реализации проектов по поставке офисной мебели для медицинских центров. Все обязательства выполнены в срок и с высоким качеством. Рекомендуем Alem Contact для дальнейшего сотрудничества.',
      name: 'С.О.Джундубаева',
      position: 'Генеральный директор',
      company: 'INTERTEACH',
      companyColor: '#e8713a',
      logoBg: '#e8f5e9',
      logoColor: '#2e7d32',
      logoText: 'INTERTEACH',
      logoFontSize: '0.55rem'
    },
    {
      text: 'Компания Alem Contact продемонстрировала высокую профессиональность и оперативность в изготовлении и установке мебели для нашего офиса. Все работы были выполнены качественно и в соответствии с нашими пожеланиями. Рекомендуем Alem Contact для дальнейшего сотрудничества.',
      name: 'Оразов К.С.',
      position: 'Начальник СХУиБ',
      company: 'KOMMESK',
      companyColor: '#e8713a',
      logoBg: '#e0f2f1',
      logoColor: '#00796b',
      logoText: 'K',
      logoFontSize: '1.8rem'
    },
    {
      text: 'Компания Alem Contact успешно выполнила работы по поставке офисной мебели для нашего объекта. Все задачи были выполнены с учетом всех наших пожеланий, быстро и профессионально. Рекомендуем Alem Contact для дальнейшего сотрудничества.',
      name: 'Исакаков М.А.',
      position: 'И.о.директора',
      company: 'MEDIKER',
      companyColor: '#e8713a',
      logoBg: '#fce4ec',
      logoColor: '#c2185b',
      logoText: 'MEDIKER',
      logoFontSize: '0.55rem'
    },
    {
      text: 'ТОО «Институт Репродуктивной Медицины» выражает благодарность компании «Alem Contact» за качественное выполнение работ по поставке офисной мебели. Все задачи были выполнены быстро и профессионально, с учетом всех наших пожеланий. Рекомендуем Alem Contact для дальнейшего сотрудничества.',
      name: 'Отрокова С.Б.',
      position: 'Генеральный директор',
      company: 'Институт Репродуктивной Медицины',
      companyColor: '#e8713a',
      logoBg: '#ffebee',
      logoColor: '#d32f2f',
      logoText: 'IRM',
      logoFontSize: '0.9rem'
    }
  ]

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <h2 className="reviews-title">Отзывы наших клиентов</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-card-inner">
                <div className="review-logo-circle" style={{ background: review.logoBg }}>
                  <span style={{ color: review.logoColor, fontSize: review.logoFontSize, fontWeight: 700, letterSpacing: '0.5px' }}>
                    {review.logoText}
                  </span>
                </div>
                <div className="review-body">
                  <p className="review-text">{review.text}</p>
                  <div className="review-author">
                    <div className="review-name">{review.name}</div>
                    <div className="review-position">
                      {review.position}{' '}
                      <span className="review-company" style={{ color: review.companyColor }}>{review.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
