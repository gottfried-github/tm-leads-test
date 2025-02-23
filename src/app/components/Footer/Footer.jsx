import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contentContainer}>
        <nav className={styles.nav}>
          <p>Быстрая навигация</p>
          <div className={styles.navLinksContainer}>
            <a href="#" className={styles.navItem}>
              Цифры
            </a>
            <a href="#" className={styles.navItem}>
              Сделки онлайн
            </a>
            <a href="#" className={styles.navItem}>
              о компании
            </a>
            <a href="#" className={styles.navItem}>
              тарифы
            </a>
            <a href="#" className={styles.navItem}>
              отзывы
            </a>
            <a href="#" className={styles.navItem}>
              FAQ
            </a>
          </div>
        </nav>
        <div className={styles.infoContainer}>
          <img src="/logo.png" alt="logo" className={styles.logo} />
          <p className={styles.copyright}>© 2022 TradeBlade. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
