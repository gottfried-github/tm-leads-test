import FaqQuestion from './FaqQuestion'
import styles from './FaqSection.module.css'

const FaqSection = () => {
  return (
    <div className={styles.container}>
      <FaqQuestion
        question={'Что такое TradeBlade'}
        answer={
          '<p>Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. </p><p>Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.</p>'
        }
      />
      <FaqQuestion
        question={'Что такое TradeBlade'}
        answer={
          '<p>Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. </p><p>Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.</p>'
        }
      />
      <FaqQuestion
        question={'Что такое TradeBlade'}
        answer={
          '<p>Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. </p><p>Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.</p>'
        }
      />
    </div>
  )
}

export default FaqSection
