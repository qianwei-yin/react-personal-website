import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const Project = ({ title, github, url, stack, index, description }) => {
	const slug = slugify(title);

	return (
		<article className="project">
			<img src={`/projects-covers/${slug}-ss.png`} alt={title} className="project-img" />
			<div className="project-info">
				<span className="project-number">{('0' + (index + 1)).slice(-2)}.</span>
				<Link to={`/projects/${slug}`} className="project-slug">
					<h3>
						{title} <span>(show details)</span>
					</h3>
				</Link>
				{description.map((p, index) => {
					return (
						<p key={index} className="project-desc">
							{p}
						</p>
					);
				})}

				<div className="project-stack">
					{stack.map((item, index) => {
						return <span key={index}>{item}</span>;
					})}
				</div>
				<div>
					<a href={github} target="_blank" rel="noreferrer">
						<FaGithubSquare className="project-icon" />
					</a>
					<a href={url} target="_blank" rel="noreferrer">
						<FaShareSquare className="project-icon" />
					</a>
				</div>
			</div>
		</article>
	);
};

export default Project;
