import { useState } from 'react'
import './Portfolio.css'

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const projects = [
    { id: 1, title: 'Офис IT-компании', image: 'project1' },
    { id: 2, title: 'Корпоративный офис', image: 'project2' },
    { id: 3, title: 'Коворкинг пространство', image: 'project3' },
    { id: 4, title: 'Банковский офис', image: 'project4' },
    { id: 5, title: 'Офис продаж', image: 'project5' },
    { id: 6, title: 'Руководящий состав', image: 'project6' }
  ]

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">Реализованные проекты</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="portfolio-item"
              onClick={() => setSelectedImage(project.id)}
            >
              <div className="portfolio-placeholder">
                <span>{project.title}</span>
              </div>
              <div className="portfolio-overlay">
                <span className="portfolio-title">{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <div className="lightbox-placeholder">
              <span>{projects.find(p => p.id === selectedImage)?.title}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Portfolio

