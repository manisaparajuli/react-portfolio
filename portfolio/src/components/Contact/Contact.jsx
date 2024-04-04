import React from 'react'
import {getImageUrl} from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return <footer className={styles.container}>
    <div className={styles.text}><h2>Contact</h2>
    <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
        <a href="mailto:manisaparajuli66@gmail.com">manisaparajuli66@gmail.com</a>
      </li>
      <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
        <a href="https://github.com/manisaparajuli" target='_blank'>github/manisaparajuli</a>
      </li>
      <li className={styles.link}>
        <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
        <a href="https://www.linkedin.com/in/manishaparajuli/" target='_blank'>LinkedIn.com/manisha</a>
      </li>
    </ul>
  </footer>
}

