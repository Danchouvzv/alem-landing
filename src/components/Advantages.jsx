import './Advantages.css'

const Advantages = () => {
  const advantages = [
    {
      title: 'Конкурентоспособные цены',
      text: 'Наши конкурентоспособные цены делают качественную офисную мебель доступной для каждого клиента.'
    },
    {
      title: 'Быстрые сроки',
      text: 'Быстрые сроки изготовления гарантируют, что ваша мебель будет готова в кратчайшие сроки.'
    },
    {
      title: 'Опыт и профессионализм',
      text: 'Мы обладаем большим опытом работы и команда профессиональных сотрудников обеспечивает высокий уровень сервиса и качества.'
    }
  ]

  return (
    <section id="advantages" className="advantages section">
      <div className="container">
        <h2 className="advantages-title">Преимущества компании</h2>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-item">
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-text">{advantage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages
