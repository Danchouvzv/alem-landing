import './Workflow.css'

const Workflow = () => {
  const steps = [
    {
      number: '01',
      title: 'Заявка / консультация',
      description: 'Вы оставляете заявку или связываетесь с нами. Наш менеджер проводит консультацию, выясняет ваши потребности и бюджет.'
    },
    {
      number: '02',
      title: 'Замер и проект',
      description: 'Наш специалист выезжает на объект, проводит замеры и разрабатывает проект планировки с учетом всех требований.'
    },
    {
      number: '03',
      title: 'Производство / подбор',
      description: 'Мы изготавливаем мебель на заказ или подбираем готовые решения из каталога, согласовывая все детали с вами.'
    },
    {
      number: '04',
      title: 'Доставка и монтаж',
      description: 'Организуем доставку и профессиональную сборку мебели на вашем объекте. Проводим финальный контроль качества.'
    }
  ]

  return (
    <section id="workflow" className="workflow section">
      <div className="container">
        <h2 className="section-title">Этапы работы</h2>
        <div className="workflow-timeline">
          {steps.map((step, index) => (
            <div key={index} className="workflow-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workflow

