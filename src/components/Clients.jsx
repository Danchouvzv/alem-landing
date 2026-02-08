import './Clients.css'

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: 'UNHCR',
      fullName: 'United Nations High Commissioner for Refugees',
      description: 'Представительство Управления Верховного Комиссара ООН по делам беженцев в РК',
      initials: 'UN',
      gradient: 'linear-gradient(135deg, #0072BC 0%, #0099FF 100%)'
    },
    {
      id: 2,
      name: 'Kagazy Invest',
      fullName: 'ТОО «Kagazy Invest»',
      description: 'Кагазы Инвест',
      initials: 'KI',
      gradient: 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)'
    },
    {
      id: 3,
      name: 'Komatsu',
      fullName: 'Komatsu СНГ',
      description: 'Представительство ООО «Комацу СНГ» в Республике Казахстан',
      initials: 'KO',
      gradient: 'linear-gradient(135deg, #003399 0%, #FFCC00 100%)'
    },
    {
      id: 4,
      name: 'Samsung',
      fullName: 'Samsung Electronics Kazakhstan',
      description: 'ТОО «Samsung Electronics»',
      initials: 'SE',
      gradient: 'linear-gradient(135deg, #1428A0 0%, #2B45D8 100%)'
    },
    {
      id: 5,
      name: 'STADA',
      fullName: 'STADA / Нижфарм',
      description: 'Представительство ОАО «Нижфарм» в Республике Казахстан',
      initials: 'ST',
      gradient: 'linear-gradient(135deg, #DA291C 0%, #FF6B6B 100%)'
    },
    {
      id: 6,
      name: 'BAT',
      fullName: 'British American Tobacco Kazakhstan Trading',
      description: 'ТОО «Бритиш Американ Тобакко Казахстан Трейдинг»',
      initials: 'BA',
      gradient: 'linear-gradient(135deg, #00457C 0%, #007ACC 100%)'
    },
    {
      id: 7,
      name: 'TMC',
      fullName: 'Technology Management Company Inc.',
      description: 'Американское представительство, международные проекты РК–США',
      initials: 'TM',
      gradient: 'linear-gradient(135deg, #607D8B 0%, #90A4AE 100%)'
    },
    {
      id: 8,
      name: 'Atlas Copco',
      fullName: 'Atlas Copco Central Asia LLP',
      description: 'ТОО «Атлас Копко Центральная Азия»',
      initials: 'AC',
      gradient: 'linear-gradient(135deg, #FDB813 0%, #F57F20 100%)'
    },
    {
      id: 9,
      name: 'Kommesk',
      fullName: 'АО «СК Коммеск-Омір»',
      description: 'Страховая компания Kommesk-Omir',
      initials: 'KO',
      gradient: 'linear-gradient(135deg, #8E24AA 0%, #BA68C8 100%)'
    },
    {
      id: 10,
      name: 'RADA',
      fullName: 'Медицинский центр «РАДА»',
      description: 'ТОО «Клиника доктора Раисовой»',
      initials: 'RA',
      gradient: 'linear-gradient(135deg, #EC407A 0%, #F48FB1 100%)'
    }
  ]

  return (
    <section id="clients" className="clients section">
      <div className="clients-background-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="ticker-wrapper">
        <div className="clients-ticker-header">
          <span className="ticker-label">Наши партнеры</span>
        </div>
        
        {/* Первый ряд - движение влево */}
        <div className="ticker-row">
          <div className="ticker-track track-left">
            {clients.map((client) => (
              <span key={`l1-${client.id}`} className="ticker-item">{client.name}</span>
            ))}
            {clients.map((client) => (
              <span key={`l2-${client.id}`} className="ticker-item">{client.name}</span>
            ))}
             {clients.map((client) => (
              <span key={`l3-${client.id}`} className="ticker-item">{client.name}</span>
            ))}
          </div>
        </div>

        {/* Второй ряд - движение вправо */}
        <div className="ticker-row">
          <div className="ticker-track track-right">
            {clients.map((client) => (
              <span key={`r1-${client.id}`} className="ticker-item stroked">{client.fullName}</span>
            ))}
            {clients.map((client) => (
              <span key={`r2-${client.id}`} className="ticker-item stroked">{client.fullName}</span>
            ))}
             {clients.map((client) => (
              <span key={`r3-${client.id}`} className="ticker-item stroked">{client.fullName}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
