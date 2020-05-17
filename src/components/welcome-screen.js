import React, { useState } from "react"

import styles from "./welcome-screen.module.css"

const WelcomeScreen = () => {
  const [show, setShow] = useState(true)

  const onAnimationEnd = event => {
    if (event.target.className === styles.container) {
      setShow(false)
    }
  }

  if (!show) return null

  return (
    <section className={styles.container} onAnimationEnd={onAnimationEnd}>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 282 28"
      >
        <g fillRule="nonzero" strokeWidth="1">
          <path
            className={styles.letterCloseBracket}
            d="M266.968 3.814l-.69 1.126 13.001 7.696-13.024 7.56.681 1.075 14.438-8.678-14.406-8.779z"
          />
          <path
            className={styles.letterSlash}
            d="M258.686.876L247.411 26.33l1.103.49 11.275-25.454-1.103-.49z"
          />
          <path
            className={styles.letterG}
            d="M222.752 1.781c-1.622 0-3.139.28-4.55.84-1.392.557-2.587 1.327-3.583 2.312a10.497 10.497 0 00-2.327 3.507c-.56 1.359-.843 2.812-.853 4.36.01 3.114 1.078 5.732 3.212 7.845 2.137 2.117 4.86 3.168 8.163 3.168 1.882 0 3.609-.364 5.18-1.095 1.398-.65 2.569-1.52 3.727-2.87v-9.27h-9.079v2.844h5.766v5.565c-1.581 1.33-3.415 1.997-5.5 1.997-1.51-.01-2.883-.372-4.123-1.081a7.689 7.689 0 01-2.953-2.953c-.708-1.252-1.065-2.636-1.065-4.153 0-2.295.769-4.228 2.298-5.802 1.511-1.577 3.391-2.37 5.64-2.37 1.974 0 3.713.627 5.425 2.1l2.1-2.218c-2.04-1.82-4.534-2.726-7.478-2.726z"
          />
          <path
            className={styles.letterN2}
            d="M189.482 2.094h-2.3V23.5h3.312V8.053L203.708 23.5h2.317V2.094h-3.328V17.54L189.482 2.094z"
          />
          <path
            className={styles.letterA3}
            d="M163.742 2.094l9.165 21.406h-3.412l-2.125-4.953h-9.645l-2.11 4.953h-3.426l9.165-21.406h2.388zm-1.2 5.22l-3.622 8.39h7.223l-3.602-8.39z"
          />
          <path
            className={styles.letterD}
            d="M138.179 2.094c4.503.084 7.54 1.389 9.467 3.985 1.476 1.995 2.214 4.234 2.214 6.718 0 1.744-.378 3.384-1.136 4.92-.755 1.53-1.793 2.788-3.113 3.77-1.757 1.29-4.093 1.95-6.987 2.009h0l-6.967.004V2.094zm.494 2.844h-3.703v15.718h3.703c1.283 0 2.432-.224 3.45-.666 1.034-.45 1.864-1.05 2.494-1.792a8.4 8.4 0 001.417-2.497 8.478 8.478 0 00.498-2.904 8.478 8.478 0 00-.498-2.904 8.39 8.39 0 00-1.412-2.491c-.635-.749-1.465-1.348-2.5-1.798-1.017-.442-2.166-.667-3.45-.667z"
          />
          <path
            className={styles.letterN1}
            d="M108.09 2.094h-2.3V23.5h3.312V8.053L122.317 23.5h2.316V2.094h-3.328V17.54L108.091 2.094z"
          />
          <path
            className={styles.letterA2}
            d="M91.89 2.094l9.165 21.406h-3.412l-2.125-4.953h-9.645l-2.11 4.953h-3.426l9.165-21.406h2.387zm-1.2 5.22l-3.622 8.39h7.222l-3.6-8.39z"
          />
          <path
            className={styles.letterM}
            d="M56.461 2.094h-2.25V23.5h3.313V9.738l6.155 10.075h2.455l6.155-10.075V23.5h3.313V2.094h-2.25l-8.437 13.884L56.46 2.094z"
          />
          <path
            className={styles.letterA1}
            d="M40.31 2.094L49.477 23.5h-3.412l-2.125-4.953h-9.645L32.185 23.5h-3.427l9.166-21.406h2.387zm-1.2 5.22l-3.62 8.39h7.222l-3.601-8.39z"
          />
          <path
            className={styles.letterOpenBracket}
            d="M15.346 3.814L.94 12.951l14.438 8.32.682-1.075-13.025-7.56L16.036 4.94l-.69-1.126z"
          />
        </g>
      </svg>
    </section>
  )
}

export default WelcomeScreen
