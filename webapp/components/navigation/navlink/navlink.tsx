import Link from 'next/link';
import styles from './navlink.module.css';

export default function NavLink(props: { text: string; route: string; isFile: boolean }) {
  return (
    <Link className={styles.container} target={props.isFile ? '_blank' : '_self'} href={props.route}>
      {props.text}
    </Link>
  );
}
