import './Advantages.css'

const Advantages = () => {
  const advantages = [
    {
      text: 'Наши конкурентоспособные цены делают качественную офисную мебель доступной для каждого клиента.'
    },
    {
      text: 'Быстрые сроки изготовления гарантируют, что ваша мебель будет готова в кратчайшие сроки.'
    },
    {
      text: 'Мы обладаем большим опытом работы и команда профессиональных сотрудников обеспечивает высокий уровень сервиса и качества.'
    }
  ]

  return (
    <section id="advantages" className="advantages section">
      <div className="container">
        <h2 className="advantages-title">Преимущества компании</h2>
        <div className="advantages-list">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-row">
              <div className="advantage-check">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="advantage-text">{advantage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages
