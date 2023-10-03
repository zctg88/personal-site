import Link from 'next/link';
import styles from './button.module.css';

export default function Button(props: { label: string }) {
  return (
    <Link className={styles.button} href="/about">
      {props.label}
    </Link>
  );
}
