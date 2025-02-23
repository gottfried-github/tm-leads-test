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
        <h2>о компании</h2>
      </div>
    </section>
  )
}

export default AboutSection
