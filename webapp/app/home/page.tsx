import About from './about/about';
import Experience from './experience/experience';
import Hero from './hero/hero';
import Projects from './projects/projects';
import Section from './section/section';

export default function Home() {
  const sections = [
    { id: 'about', title: 'About Me', tag: <About />, background: '#cce6f4' },
    { id: 'experience', title: 'My Experience', tag: <Experience />, background: '#cce6f4' },
    { id: 'projects', title: 'Projects', tag: <Projects />, background: '#cce6f4' },
  ];

  return (
    <>
      <Hero />
      {sections.map((component) => (
        <Section key={component.id} id={component.id} title={component.title} background={component.background}>
          {component.tag}
        </Section>
      ))}
    </>
  );
}
