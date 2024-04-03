import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img src={getImageUrl("about/aboutImage.png")} alt="me sitting with my laptop"  className={styles.aboutImage}/>

      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
          <div className={styles.aboutItemText}><h3>Fornt-end developer</h3>
            <p>I am a front-end developer with experience in building user friendly sites.</p>
          </div>
        </li>

        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
          <div className={styles.aboutItemText}><h3>Back-end developer</h3>
            <p>I am a back-end developer with experience in building fast and optimized sites.</p>
          </div>
        </li>
        
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")} alt="cursor icon" />
          <div className={styles.aboutItemText}><h3>UI/UX designer</h3>
            <p>I am a google certified UI/UX designer with strong portfolio</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
}

