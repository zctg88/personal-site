import { ReactNode, PropsWithChildren } from 'react';
import styles from './section.module.css';

export default function Section(props: PropsWithChildren<{ id: string; title: string; background: string }>) {
  return (
    <div id={props.id} className={styles.container} style={props.background ? { background: props.background } : {}}>
      <span className={styles.heading}>{props.title}</span>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}
