import { useParams } from 'react-router-dom';
import projectDetail from '../assets/constants/projectsDetail';
import projectResources from '../assets/constants/projectsResources';
import slugify from 'slugify';
// import Seo from '../../components/Seo';

const SingleProjectPage = () => {
	const { projectSlug } = useParams();
	const singleProjectDetail = projectDetail.find((el) => {
		return projectSlug === slugify(el.title);
	});

	return (
		<>
			{/* <Seo title={info.title} image={info.image.localFile.publicURL} /> */}
			<section className="project-detail-page">
				<main className="section-center project-template-page">
					<h1>{singleProjectDetail.title}</h1>
					<div className="underline"></div>

					<div className="project-stack stack">
						{singleProjectDetail.stack.map((item) => {
							return <span key={item}>{item}</span>;
						})}
					</div>

					<img
						src={`/projects-covers/${projectSlug}-ss.png`}
						alt={singleProjectDetail.title}
						className="single-project-img"
					/>

					<h2>1. A brief Introduction</h2>
					{singleProjectDetail.description.map((p, index) => {
						return <p key={index}>{p}</p>;
					})}

					<p>
						Now go to{' '}
						<a href={singleProjectDetail.url} target="_blank" rel="noreferrer">
							{singleProjectDetail.title.toUpperCase()}
						</a>{' '}
						and enjoy your journey!
					</p>

					{singleProjectDetail.resources.length > 0 && (
						<>
							<h2>2. Technology Stack and Resources</h2>

							{singleProjectDetail.resources.map((reso, index) => {
								return (
									<div key={index}>
										<h4>{reso}</h4>
										{projectResources[reso].map((p, ind) => {
											return <p key={ind}>{p}</p>;
										})}
									</div>
								);
							})}
						</>
					)}
				</main>
			</section>
		</>
	);
};
export default SingleProjectPage;
