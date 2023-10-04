import Image from 'next/image';
import styles from './hero.module.css';
import Button from '@/components/button/button';
import ScrollArrow from '@/components/scroll-arrow/scroll-arrow';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <h1>Hello, I'm Zach Chin!</h1>
          <h2>User-centered web developer.</h2>
          <span className={styles.aboutMeBtn}>
            <Button label="More about me -->"></Button>
          </span>
        </div>
        <div className={styles.graphic}>Floating Graphic Here</div>
      </div>
      <div className={styles.extra}>
        <ScrollArrow id="projects" />
      </div>
    </div>
  );
}
