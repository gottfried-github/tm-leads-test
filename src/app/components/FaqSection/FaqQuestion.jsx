import { useState, useEffect, useRef } from 'react'
import styles from './FaqQuestion.module.css'

const FaqQuestion = ({ question, answer }) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false)

  const refContainer = useRef(null)
  const refContent = useRef(null)
  const refQuestion = useRef(null)

  useEffect(() => {
    const questionHeight = refQuestion.current.getBoundingClientRect().height
    refContainer.current.style.height = `${questionHeight}px`
  }, [])

  const handleOpenQuestion = () => {
    const contentHeight = refContent.current.getBoundingClientRect().height
    refContainer.current.style.height = `${contentHeight}px`

    setIsQuestionOpen(true)
  }

  const handleCloseQuestion = () => {
    const questionHeight = refQuestion.current.getBoundingClientRect().height
    refContainer.current.style.height = `${questionHeight}px`

    setIsQuestionOpen(false)
  }

  const handleQuestionClick = () => {
    if (isQuestionOpen) {
      handleCloseQuestion()
    } else {
      handleOpenQuestion()
    }
  }

  return (
    <div ref={refContainer} className={styles.container} onClick={handleQuestionClick}>
      <div ref={refContent}>
        <div ref={refQuestion} className={styles.question}>
          {question}
        </div>
        <div className={styles.answer} dangerouslySetInnerHTML={{ __html: answer }}></div>
      </div>
    </div>
  )
}

export default FaqQuestion
