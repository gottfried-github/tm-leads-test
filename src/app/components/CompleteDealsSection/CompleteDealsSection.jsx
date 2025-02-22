import Carousel from '../Carousel/Carousel'
import Ellipse from '../icons/Ellipse'
import styles from './CompleteDealsSection.module.css'

const CompleteDealsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>Прошедшие сделки</h2>
        <div className={styles.subtitleContainer}>
          <Ellipse />
          <div className={styles.subtitleText}>Онлайн</div>
        </div>
      </div>
      <Carousel />
    </div>
  )
}

export default CompleteDealsSection
