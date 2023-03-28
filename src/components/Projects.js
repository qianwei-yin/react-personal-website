import { Link } from 'react-router-dom';
import Title from './Title';
import Project from './Project';
import ProjectsCategory from './ProjectsCategory';

const Projects = ({ title, data, type, setType, showMore }) => {
	return (
		<section className="section projects">
			<Title title={title} />

			<ProjectsCategory type={type} setType={setType} />

			<div className="section-center projects-center">
				{data
					.filter((proj) => proj.type === type)
					.map((proj, index) => {
						return <Project key={index} index={index} {...proj} />;
					})}
			</div>

			{showMore && (
				<Link to="/projects" className="btn center-btn">
					show more
				</Link>
			)}
		</section>
	);
};

export default Projects;
