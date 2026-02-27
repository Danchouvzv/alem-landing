import './Reviews.css'

const Reviews = () => {
  const reviews = [
    {
      text: 'Компания Alem Contact зарекомендовала себя как надежный и профессиональный партнер в реализации проектов по поставке офисной мебели для медицинских центров. Все обязательства выполнены в срок и с высоким качеством. Рекомендуем Alem Contact для дальнейшего сотрудничества.',
      name: 'С.О.Джундубаева',
      position: 'Генеральный директор',
      company: 'INTERTEACH',
      companyColor: '#e8713a',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9XMZwIzD6VoWGhy7i1UfF0hDLpDTK3fnaA&s'
    },
    {
      text: 'Компания Alem Contact продемонстрировала высокую профессиональность и оперативность в изготовлении и установке мебели для нашего офиса. Все работы были выполнены качественно и в соответствии с нашими пожеланиями. Рекомендуем Alem Contact для дальнейшего сотрудничества.',
      name: 'Оразов К.С.',
      position: 'Начальник СХУиБ',
      company: 'KOMMESK',
      companyColor: '#e8713a',
      logoUrl: 'https://msp.kz/baza-tovarnyh-znakov.php?base=signsgas&id=3a4h6i28'
    },
    {
      text: 'Компания Alem Contact успешно выполнила работы по поставке офисной мебели для нашего объекта. Все задачи были выполнены с учетом всех наших пожеланий, быстро и профессионально. Рекомендуем Alem Contact для дальнейшего сотрудничества.',
      name: 'Исакаков М.А.',
      position: 'И.о.директора',
      company: 'MEDIKER',
      companyColor: '#e8713a',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EmoQ2qXgY6o3CMmJYJ2PuAaK35nUPlYxzA&s'
    },
    {
      text: 'ТОО «Институт Репродуктивной Медицины» выражает благодарность компании «Alem Contact» за качественное выполнение работ по поставке офисной мебели. Все задачи были выполнены быстро и профессионально, с учетом всех наших пожеланий. Рекомендуем Alem Contact для дальнейшего сотрудничества.',
      name: 'Отрокова С.Б.',
      position: 'Генеральный директор',
      company: 'Институт Репродуктивной Медицины',
      companyColor: '#e8713a',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3svGzU-hGT-j3pVxxTUwyI5C9YYQsE38qA&s'
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
                <div className="review-logo-circle">
                  <img src={review.logoUrl} alt={review.company} />
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
