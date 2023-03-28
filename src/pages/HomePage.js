import Hero from '../components/Hero';
import Keywords from '../components/KeyWords';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';
import projectsDetail from '../assets/constants/projectsDetail';
// import Seo from '../components/Seo';

const HomePage = ({ type, setType }) => {
	const featuredProjects = projectsDetail.filter((el) => el.featured);

	return (
		<>
			{/* <Seo title="Home" /> */}
			<main>
				<Hero />
				<Keywords />
				<Jobs />
				<Projects title="featured projects" data={featuredProjects} type={type} setType={setType} showMore />
			</main>
		</>
	);
};

export default HomePage;
