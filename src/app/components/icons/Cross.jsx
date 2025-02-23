const Cross = ({ className, onClick }) => {
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
        d="M8.74035 8.74042C9.10484 8.37593 9.69579 8.37593 10.0603 8.74042L23.2596 21.9398C23.6241 22.3042 23.6241 22.8952 23.2596 23.2597C22.8951 23.6242 22.3042 23.6242 21.9397 23.2597L8.74035 10.0604C8.37586 9.69587 8.37586 9.10491 8.74035 8.74042Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.74036 23.2597C8.37587 22.8952 8.37587 22.3043 8.74036 21.9398L21.9397 8.74045C22.3042 8.37596 22.8951 8.37596 23.2596 8.74045C23.6241 9.10494 23.6241 9.69589 23.2596 10.0604L10.0603 23.2597C9.69581 23.6242 9.10485 23.6242 8.74036 23.2597Z"
        fill="white"
      />
    </svg>
  )
}

export default Cross
