import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.infoContainer}>
          <h1 className={styles.infoTitle}>моментально копируй сделки профи трейдеров</h1>
          <p className={styles.infoText}>
            Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом
            режиме.
          </p>
          <div className={styles.emailForm}>
            <div className={styles.emailInputContainer}>
              <input type="text" placeholder="ВАШ E-MAIL" className={styles.emailInput} />
            </div>
            <button className={styles.emailFormButton}>начать</button>
          </div>
          <p className={styles.emailFormComment}>5 дней бесплатного пользования</p>
        </div>
        <img src="/hero-image.png" alt="hero image" className={styles.heroImage} />
      </div>
    </section>
  )
}

export default HeroSection
