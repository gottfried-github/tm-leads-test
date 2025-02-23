import { useState } from 'react'
import ArrowDown from '../icons/ArrowDown'
import Checkmark from '../icons/Checkmark'
import styles from './TarifsSection.module.css'

const TarifsSection = () => {
  const [isSpotVisible, setIsSpotVisible] = useState(false)

  const handleStandartClick = () => {
    setIsSpotVisible(false)
  }

  const handleSpotClick = () => {
    setIsSpotVisible(true)
  }

  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.buttonsContainer}>
          <button className={styles.button} onClick={handleStandartClick}>
            Standart
          </button>
          <button className={styles.button} onClick={handleSpotClick}>
            Spot
          </button>
        </div>
        <div className={styles.infoContainer}>
          <div className={`${styles.infoEntry} ${isSpotVisible ? '' : styles.visible}`}>
            <div className={`${styles.infoPlan} ${styles.infoStandart}`}>
              <div className={styles.planContent}>
                <h3 className={styles.planHeading}>Standart</h3>
                <div className={styles.planFeatures}>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Ручной трейдинг
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Автоматическое или полуавтоматическое копирование сделок
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Личный кабинет со статистикой
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Среднесрочные сделки с уровнями набора портфеля
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.planFooter}>
                <div className={styles.planPriceContainer}>
                  <div className={styles.planPriceBlock}>
                    <div className={styles.planPrice}>$234</div>
                    <div className={styles.planDiscount}>-35%</div>
                  </div>
                  <div className={styles.planPeriod}>
                    12 месяцев <ArrowDown />
                  </div>
                </div>
                <button className={styles.planButton}>
                  <p className={styles.planButtonHeading}>Попробовать</p>
                  <p className={styles.planButtonSubtitle}>5 дней бесплатно</p>
                </button>
              </div>
            </div>
            <div className={`${styles.infoPlan} ${styles.infoVip}`}>
              <div className={styles.planContent}>
                <h3 className={styles.planHeading}>VIP</h3>
                <div className={styles.planFeatures}>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Ручной трейдинг
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Автоматическое или полуавтоматическое копирование сделок
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Личный кабинет со статистикой
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Краткосрочные, среднесрочные и инвест сделки
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Доступ в Vip чат с командой
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Наш авторский курс по трейдингу
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.planFooter}>
                <div className={styles.planPriceContainer}>
                  <div className={styles.planPriceBlock}>
                    <div className={styles.planPrice}>$565</div>
                    <div className={styles.planDiscount}>-35%</div>
                  </div>
                  <div className={styles.planPeriod}>
                    12 месяцев <ArrowDown />
                  </div>
                </div>
                <button className={styles.planButton}>
                  <p className={styles.planButtonHeading}>Попробовать</p>
                  <p className={styles.planButtonSubtitle}>5 дней бесплатно</p>
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.infoEntry} ${isSpotVisible ? styles.visible : ''}`}>
            <div className={`${styles.infoPlan} ${styles.infoStandart}`}>
              <div className={styles.planContent}>
                <h3 className={styles.planHeading}>Standart</h3>
                <div className={styles.planFeatures}>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Личный кабинет со статистикой
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Ручной трейдинг
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Автоматическое или полуавтоматическое копирование сделок
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Среднесрочные сделки с уровнями набора портфеля
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.planFooter}>
                <div className={styles.planPriceContainer}>
                  <div className={styles.planPriceBlock}>
                    <div className={styles.planPrice}>$188</div>
                    <div className={styles.planDiscount}>-40%</div>
                  </div>
                  <div className={styles.planPeriod}>
                    12 месяцев <ArrowDown />
                  </div>
                </div>
                <button className={styles.planButton}>
                  <p className={styles.planButtonHeading}>Попробовать</p>
                  <p className={styles.planButtonSubtitle}>5 дней бесплатно</p>
                </button>
              </div>
            </div>
            <div className={`${styles.infoPlan} ${styles.infoVip}`}>
              <div className={styles.planContent}>
                <h3 className={styles.planHeading}>VIP</h3>
                <div className={styles.planFeatures}>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Личный кабинет со статистикой
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Ручной трейдинг
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Автоматическое или полуавтоматическое копирование сделок
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Краткосрочные, среднесрочные и инвест сделки
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Доступ в Vip чат с командой
                    </div>
                  </div>
                  <div className={styles.planFeatureContainer}>
                    <div className={styles.planFeature}>
                      <Checkmark className={styles.planFeatureCheckmark} />
                      Наш авторский курс по трейдингу
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.planFooter}>
                <div className={styles.planPriceContainer}>
                  <div className={styles.planPriceBlock}>
                    <div className={styles.planPrice}>$545</div>
                    <div className={styles.planDiscount}>-20%</div>
                  </div>
                  <div className={styles.planPeriod}>
                    12 месяцев <ArrowDown />
                  </div>
                </div>
                <button className={styles.planButton}>
                  <p className={styles.planButtonHeading}>Попробовать</p>
                  <p className={styles.planButtonSubtitle}>5 дней бесплатно</p>
                </button>
              </div>
            </div>
            {/* <h3>Spot</h3>
            <p>Подходит для крупных проектов</p>
            <p>Цена: 5000 рублей</p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TarifsSection
