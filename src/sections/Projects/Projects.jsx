import styles from './ProjectsStyles.module.css';
import peerbox from '../../assets/peerbox.png';
import kozy from '../../assets/kozy.png';
import food from '../../assets/food.png';
import reversi from '../../assets/reversi.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='Projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={peerbox}
          link=''
          h3='Peerbox'
          p='Cloud Storage Service'
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