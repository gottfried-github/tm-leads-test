import Cross from '../icons/Cross'
import stylesHeader from '../Header/Header.module.css'
import styles from './MobileMenu.module.css'

const MobileMenu = ({ onClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Cross className={styles.closeButton} onClick={onClose} />
        </div>
      </div>
      <nav className={styles.navContainer}>
        <div className={styles.nav}>
          <a href="#" className={styles.navItem} onClick={onClose}>
            Цифры
          </a>
          <a href="#" className={styles.navItem} onClick={onClose}>
            Сделки онлайн
          </a>
          <a href="#" className={styles.navItem} onClick={onClose}>
            о компании
          </a>
          <a href="#" className={styles.navItem} onClick={onClose}>
            тарифы
          </a>
          <a href="#" className={styles.navItem} onClick={onClose}>
            отзывы
          </a>
          <a href="#" className={styles.navItem} onClick={onClose}>
            FAQ
          </a>
        </div>
      </nav>
      <div className={styles.buttonsContainer}>
        <button className={`${styles.button} ${stylesHeader.button} ${stylesHeader.buttonSignup}`}>
          регистрация
        </button>
        <button className={`${styles.button} ${stylesHeader.button} ${stylesHeader.buttonLogin}`}>
          Войти
        </button>
      </div>
    </div>
  )
}

export default MobileMenu
