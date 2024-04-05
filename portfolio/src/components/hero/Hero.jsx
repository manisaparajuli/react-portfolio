import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Manisha</h1>
        <p className={styles.description}>A Front-end developer actively looking for new opportunity to collab. Reach out if you'd like to learn more</p>
        <a href="mailto:manisaparajuli66@gmail.com"  className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
  </section>
};


