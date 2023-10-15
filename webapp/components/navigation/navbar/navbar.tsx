'use client';

import { useEffect, useState } from 'react';
import NavLink from '../navlink/navlink';
import styles from './navbar.module.css';

export default function NavBar() {
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
  }, []);

  const pages = [
    { name: 'About Me', route: '#about', isFile: false },
    { name: 'Experience', route: '#experience', isFile: false },
    { name: 'Projects', route: '#projects', isFile: false },
    { name: 'Resume', route: '/Zachary_Chin_Resume.pdf', isFile: true },
  ];

  return (
    <div className={`${styles.container} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.buttons}>
        {pages.map((page) => (
          <NavLink key={page.name} text={page.name} route={page.route} isFile={page.isFile} />
        ))}
      </div>
    </div>
  );
}
