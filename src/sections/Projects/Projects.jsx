import styles from './ProjectsStyles.module.css';
import peerbox from '../../assets/Projects/peerbox.png';
import kozy from '../../assets/Projects/kozy.png';
import food from '../../assets/Projects/food.png';
import reversi from '../../assets/Projects/reversi.png';
import codetech from '../../assets/Projects/codetech.png';
import movie from '../../assets/Projects/movie.jpg'
import geminite from '../../assets/Projects/geminite.jpg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='Projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={codetech}
          link='https://csufcodetech.vercel.app/'
          h3='CodeTech'
          p='Automated Code Grading'
        />
        <ProjectCard
          src={geminite}
          link='https://geminite.vercel.app/'
          h3='Geminite'
          p="AI-powered chatbot"
        />
        <ProjectCard
          src={peerbox}
          link=''
          h3='Peerbox'
          p='Cloud Storage Service'
        />
        <ProjectCard
          src={movie}
          link='https://moviesdiscovery.vercel.app/'
          h3='Movie Discovery'
          p='Find movie you enjoy'
        />
        <ProjectCard
          src={kozy}
          link='https://github.com/hibgar/362proj'
          h3='Kozy'
          p='E-commerce Website'
        />
        <ProjectCard
          src={food}
          link='https://github.com/trangn03/Food-Keeper-Research'
          h3='Food Keeper'
          p='Food-related Analysis'
        />
        <ProjectCard
          src={reversi}
          link=''
          h3='Reversi'
          p='Board Game'
        />
      </div>
    </section>
  );
}

export default Projects;