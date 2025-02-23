import styles from './SignupSection.module.css'

const SignupSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>
          Начните прямо сейчас с бесплатным 5–и дневным пробным периодом!
        </h2>
        <div className={styles.emailForm}>
          <div className={styles.emailInputContainer}>
            <input type="text" placeholder="ВАШ E-MAIL" className={styles.emailInput} />
          </div>
          <button className={styles.emailFormButton}>зарегистрироваться</button>
        </div>
      </div>
    </section>
  )
}

export default SignupSection
