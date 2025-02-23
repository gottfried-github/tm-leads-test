import styles from './Testimonial.module.css'

const Testimonial = ({ avatarUrl, nickName, subtitle, text }) => {
  return (
    <div className={styles.container}>
      <img src={avatarUrl} alt="avatar" className={styles.avatar} />
      <div className={styles.infoContainer}>
        <h3 className={styles.nickName}>{nickName}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default Testimonial
