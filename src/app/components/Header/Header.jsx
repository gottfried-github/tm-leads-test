import Menu from '../icons/Menu'
import styles from './Header.module.css'

const Header = ({ onMenuClick }) => {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <img src="/logo.png" alt="logo" className={styles.logo} />
        <nav className={styles.nav}>
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
        </nav>
        <div className={styles.buttonsContainer}>
          <button className={`${styles.button} ${styles.buttonLogin}`}>вход</button>
          <button className={`${styles.button} ${styles.buttonSignup}`}>Регистрация</button>
        </div>
        <Menu className={styles.menu} onClick={onMenuClick} />
      </div>
    </header>
  )
}

export default Header
