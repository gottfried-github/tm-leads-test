import Testimonial from './Testimonial'
import styles from './TestimonialsSection.module.css'

const TestimonialsSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>отзывы учасников комьюнити</h2>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialsColumn}>
            <Testimonial
              avatarUrl="/avatar0.png"
              nickName="@ArtemGuriev"
              subtitle="Общая прибыль 3043.27 USD"
              text="Я запустил спот-бота 5 января. За 25 дней я заработал более 3 тысяч на споте без единого убытка и без страха ликвидации. Большое спасибо TradeBlade за создание такого замечательного бота."
            />
            <Testimonial
              avatarUrl="/avatar1.png"
              nickName="@gWagon"
              subtitle="Общую прибыль не афиширует"
              text="Попробовал. Понравилось. Рекомендую ли я? Да. Но адектватно понимаю, что чем больше людей тем может быть меньше прибыли..."
            />
          </div>
          <div className={styles.testimonialsColumn}>
            <Testimonial
              avatarUrl="/avatar2.png"
              nickName="@XPonse"
              subtitle="Общую прибыль не афиширует"
              text="Мой капитал 2к. Если я получаю 10 долларов в день, то за месяц я зарабатываю 300 долларов. То есть 15% в месяц, что мне более чем достаточно."
            />
            <Testimonial
              avatarUrl="/avatar3.png"
              nickName="@sanyaMnS"
              subtitle="Общая прибыль 4 405.96 USD"
              text="Сначала немного расстроился ибо заработал 4$ с одной крупной сделки. Но зато понял что все равно в плюсе. На следующей сделке все полетело вверх."
            />
          </div>
        </div>
        <button className={styles.loadMoreButton}>Загрузить больше отзывов</button>
      </div>
    </section>
  )
}

export default TestimonialsSection
