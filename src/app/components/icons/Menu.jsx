'use client'

const Menu = ({ className, onClick }) => {
  return (
    <svg
      className={className || ''}
      onClick={onClick || null}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.39999 9.33324C4.39999 8.81777 4.81786 8.3999 5.33333 8.3999H26.6667C27.1821 8.3999 27.6 8.81777 27.6 9.33324C27.6 9.8487 27.1821 10.2666 26.6667 10.2666H5.33333C4.81786 10.2666 4.39999 9.8487 4.39999 9.33324Z"
        fill="#E7F7F8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.39999 16C4.39999 15.4845 4.81786 15.0667 5.33333 15.0667H26.6667C27.1821 15.0667 27.6 15.4845 27.6 16C27.6 16.5154 27.1821 16.9333 26.6667 16.9333H5.33333C4.81786 16.9333 4.39999 16.5154 4.39999 16Z"
        fill="#E7F7F8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.39999 22.6665C4.39999 22.151 4.81786 21.7332 5.33333 21.7332H26.6667C27.1821 21.7332 27.6 22.151 27.6 22.6665C27.6 23.182 27.1821 23.5998 26.6667 23.5998H5.33333C4.81786 23.5998 4.39999 23.182 4.39999 22.6665Z"
        fill="#E7F7F8"
      />
    </svg>
  )
}

export default Menu
