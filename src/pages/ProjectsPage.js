import Projects from '../components/Projects';
// import Seo from '../components/Seo';
import projectsDetail from '../assets/constants/projectsDetail';

const ProjectsPage = ({ type, setType }) => {
	return (
		<>
			{/* <Seo title="Projects" /> */}
			<main>
				<section className="projects-page">
					<Projects title="all projects" data={projectsDetail} type={type} setType={setType} />
				</section>
			</main>
		</>
	);
};

export default ProjectsPage;
