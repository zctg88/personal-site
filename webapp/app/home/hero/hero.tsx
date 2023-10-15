'use client';

import styles from './hero.module.css';
import Button from '@/components/button/button';
import ScrollArrow from '@/components/scroll-arrow/scroll-arrow';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 96) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <h1>Hello, I'm Zach Chin!</h1>
          <h2>Web developer.</h2>
          <div className={styles.buttons}>
            <Button label="More About Me"></Button>
            <Button label="My Work"></Button>
          </div>
        </div>
      </div>
      <div className={`${styles.extra} ${scrolled ? styles.hidden : ''}`}>
        <ScrollArrow label="Read more about me!" id="about" />
      </div>
    </div>
  );
}
