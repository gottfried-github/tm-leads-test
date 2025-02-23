import styles from './AboutSection.module.css'

const AboutSection = () => {
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
        <div className={styles.sectionContent}>
          <div className={styles.sectionInfo}>
            <h2 className={styles.infoTitle}>о компании</h2>
            <div className={styles.infoDescription}>
              <p className={styles.infoDescriptionParagraph}>
                Мы опытная команда, для которой трейдинг – профессия. TradeBlade является
                авторизованным официальным брокером биржи Binance.
              </p>
              <p className={styles.infoDescriptionParagraph}>
                Он представляет пользователям множество преимуществ, таких как более високая
                скорость синхронизации API и возможность создать учетную запись Binance через
                платформу TradeBlade всего в 1 клик.
              </p>
            </div>
          </div>
          <div className={styles.formSection}>
            <h3 className={styles.formSectionTitle}>
              Попробуйте сейчас и получите 5 дней бесплатного пользования
            </h3>
            <div className={styles.emailForm}>
              <div className={styles.emailInputContainer}>
                <input type="text" placeholder="ВАШ E-MAIL" className={styles.emailInput} />
              </div>
              <button className={styles.emailFormButton}>попробовать</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
