import ProjectCard from '@/components/project-card/project-card';
import styles from './projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Total Cost of Care',
      category: 'Web App',
      description: 'Tracker for enterprise project budgets and Key Performance Indicators.',
      background: '#8C9DCF',
    },
    {
      title: 'Calvin Electronic Medical Record',
      category: 'Web App',
      description: 'Educational tool for Calvin University nursing students.',
      background: '#A0C8F8',
    },
    {
      title: 'Freespace',
      category: 'Mobile App',
      description: 'Tracker for the capacity of on-campus locations.',
      background: '#BAA0B0',
    },
    {
      title: 'Fat Salmon Restaurant Site',
      category: 'Web App',
      description: 'For Fat Salmon website.',
      background: '#B6C8A9',
    },
  ];

  return (
    <div className={styles.content}>
      {projects.map((project) => (
        <span key={project.title}>
          <ProjectCard
            title={project.title}
            category={project.category}
            description={project.description}
            background={project.background}
          />
        </span>
      ))}
    </div>
  );
}
