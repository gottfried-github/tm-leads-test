import { useState, useEffect, useRef } from 'react'
import ArrowDown from '../icons/ArrowDown'
import styles from './FaqQuestion.module.css'

const FaqQuestion = ({ question, answer }) => {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false)

  const refContainer = useRef(null)
  const refContent = useRef(null)
  const refQuestion = useRef(null)

  useEffect(() => {
    if (isQuestionOpen) {
      const contentHeight = refContent.current.getBoundingClientRect().height
      refContainer.current.style.height = `${contentHeight}px`
    } else {
      const questionHeight = refQuestion.current.getBoundingClientRect().height
      refContainer.current.style.height = `${questionHeight}px`
    }

    window.addEventListener('resize', () => {
      if (isQuestionOpen) {
        const contentHeight = refContent.current.getBoundingClientRect().height
        refContainer.current.style.height = `${contentHeight}px`
      } else {
        const questionHeight = refQuestion.current.getBoundingClientRect().height
        refContainer.current.style.height = `${questionHeight}px`
      }
    })
  }, [isQuestionOpen])

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
    <div
      ref={refContainer}
      className={`${styles.container} ${isQuestionOpen ? styles.isContainerOpen : ''}`}
      onClick={handleQuestionClick}
    >
      <div ref={refContent}>
        <div ref={refQuestion} className={styles.question}>
          {question}
          <ArrowDown className={styles.arrow} />
        </div>
        <div
          className={`rich-content ${styles.answer}`}
          dangerouslySetInnerHTML={{ __html: answer }}
        ></div>
      </div>
    </div>
  )
}

export default FaqQuestion
