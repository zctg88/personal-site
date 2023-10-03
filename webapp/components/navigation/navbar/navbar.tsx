import Link from 'next/link';
import NavLink from '../navlink/navlink';
import styles from './navbar.module.css';

export default function NavBar() {
  const pages = [
    { name: 'Projects', route: '/', isFile: false },
    { name: 'About Me', route: 'about', isFile: false },
    { name: 'Resume', route: '/Zachary_Chin_Resume.pdf', isFile: true },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.buttons}>
        {pages.map((page) => (
          <NavLink key={page.name} text={page.name} route={page.route} isFile={page.isFile} />
        ))}
      </div>
    </div>
  );
}
