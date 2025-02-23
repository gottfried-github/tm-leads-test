import { useState, useEffect } from 'react'

const Checkmark = ({ className }) => {
  const [clipPathId, setClipPathId] = useState(null)

  useEffect(() => {
    setClipPathId(`clip0_${Math.random()}_${Math.random()}`)
  }, [])

  // #clip0_171_353

  return (
    <svg
      className={className || ''}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path={`url(#${clipPathId})`}>
        <path
          d="M2 6.5625L5.71231 10.2748L10.9623 2.39982"
          stroke="white"
          strokeWidth="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id={clipPathId}>
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Checkmark
