import ArrowUp from '../icons/ArrowUp'
import styles from './Slide.module.css'

const Slide = ({ title, subtitle, profit, goal, date }) => {
  return (
    <div className={styles.container}>
      <img className={styles.slideBackground} src="/slide-background.svg" alt="" />
      <img className={styles.slideBackgroundLogo} src="/slide-background-logo.svg" alt="" />
      <div className={styles.slideContent}>
        <div className={styles.slideContentHeader}>
          <div className={styles.slideHeaderTitle}>{title}</div>
          <div className={styles.slideHeaderSubtitle}>{subtitle}</div>
        </div>
        <div className={styles.slideContentBottom}>
          <div className={styles.slideContentBody}>
            <div className={styles.slideBodyTitle}>Прибыль</div>
            <div className={styles.slideBodyTextContainer}>
              <div className={styles.slideBodyText}>{profit}</div>
              <ArrowUp />
            </div>
          </div>
          <div className={styles.slideFooter}>
            <div className={styles.slideGoal}>{goal}</div>
            <div className={styles.slideDate}>Дата входа {date}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
