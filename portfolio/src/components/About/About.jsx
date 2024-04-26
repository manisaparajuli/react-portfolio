import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About Me</h2>
    <div className={styles.content}>
      <img src={getImageUrl("about/aboutImage.png")} alt="me sitting with my laptop"  className={styles.aboutImage}/>

      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
          <div className={styles.aboutItemText}><h3>Passion for Front-End Development</h3>
            <p>What drives me in front-end development is the ability to create intuitive, user-centric interfaces that not only look great but also provide seamless functionality. I'm fascinated by the ever-evolving nature of web development and am always eager to explore new tools and frameworks to enhance my craft.</p>
          </div>
        </li>

        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
          <div className={styles.aboutItemText}><h3>Full-stack developer</h3>
            <p>I'm also deeply interested in backend development. Exploring server-side technologies, databases, and APIs excites me as much as crafting front-end experiences. My goal is to master both domains to create comprehensive, high-quality web applications.</p>
          </div>
        </li>
        
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")} alt="cursor icon" />
          <div className={styles.aboutItemText}><h3>Beyond the Code</h3>
            <p>When I'm not coding, you can often find me on a hiking trail, embracing the adventure and tranquility of nature. I'm passionate about exploring the outdoors and seeking new challenges.</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
}

