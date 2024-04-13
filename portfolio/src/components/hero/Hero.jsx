import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Manisha</h1>
        <p className={styles.description}>A front-end developer actively looking for new opportunities to collaborate. Reach out if you'd like to learn more about me. </p>
        <a href="mailto:manisaparajuli66@gmail.com"  className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
  </section>
};


