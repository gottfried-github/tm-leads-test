import styles from './NumbersSection.module.css'

const NumbersSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.sectionFigureContainer}>
        <img
          src="/section-figure-desktop.svg"
          alt="section figure"
          className={styles.sectionFigure}
        />
      </div>
      <div className={styles.section}>
        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Цифры</h2>
            <p className={styles.subtitle}>Cентябрь 2022</p>
          </div>
          <div className={styles.numbersContainer}>
            <div className={styles.numbersCell}>
              <h3 className={styles.cellTitle}>Торговой прибыли</h3>
              <p className={styles.cellText}>2756%</p>
            </div>
            <div className={styles.numbersCell}>
              <h3 className={styles.cellTitle}>фьючерсных и спотовых сделок</h3>
              <p className={styles.cellText}>67</p>
            </div>
            <div className={styles.numbersCell}>
              <h3 className={styles.cellTitle}>прибыль подписчиков</h3>
              <p className={styles.cellText}>375000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NumbersSection
