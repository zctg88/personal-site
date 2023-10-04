import styles from './project-card.module.css';

export default function ProjectCard(props: {
  title: string;
  category: string;
  description: string;
  background: string;
}) {
  return (
    <div className={styles.container} style={{ background: props.background }}>
      <div className={styles.category}>{props.category}</div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
}
