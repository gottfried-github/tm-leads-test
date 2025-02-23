import { useState } from 'react'
import styles from './TarifsSection.module.css'

const TarifsSection = () => {
  const [isSpotVisible, setIsSpotVisible] = useState(false)

  const handleStandartClick = () => {
    setIsSpotVisible(false)
  }

  const handleSpotClick = () => {
    setIsSpotVisible(true)
  }

  return (
    <section className={styles.container}>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={handleStandartClick}>
          Standart
        </button>
        <button className={styles.button} onClick={handleSpotClick}>
          Spot
        </button>
      </div>
      <div className={styles.infoContainer}>
        <div className={`${styles.infoEntry} ${isSpotVisible ? '' : styles.visible}`}>
          <h3>Standart</h3>
          <p>Подходит для небольших проектов</p>
          <p>Цена: 1000 рублей</p>
        </div>
        <div className={`${styles.infoEntry} ${isSpotVisible ? styles.visible : ''}`}>
          <h3>Spot</h3>
          <p>Подходит для крупных проектов</p>
          <p>Цена: 5000 рублей</p>
        </div>
      </div>
    </section>
  )
}

export default TarifsSection
