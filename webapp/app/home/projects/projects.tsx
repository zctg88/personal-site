import ProjectCard from '@/components/project-card/project-card';
import styles from './projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Total Cost of Care',
      category: 'Web App',
      description: 'Tracker for enterprise project budgets and Key Performance Indicators.',
      background: 'rgb(0, 126, 167)',
    },
    {
      title: 'Calvin Electronic Medical Record',
      category: 'Web App',
      description: 'Educational tool for Calvin University nursing students.',
      background: 'rgb(209, 222, 222)',
    },
    {
      title: 'Freespace',
      category: 'Mobile App',
      description: 'Tracker for the capacity of on-campus locations.',
      background: 'rgb(183, 195, 243)',
    },
    {
      title: 'Fat Salmon Restaurant Site',
      category: 'Web App',
      description: 'For Fat Salmon website.',
      background: 'rgb(234, 210, 172)',
    },
  ];

  return (
    <div id="projects" className={styles.container}>
      <span className={styles.heading}>Projects</span>
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
    </div>
  );
}
