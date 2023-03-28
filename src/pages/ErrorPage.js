import { Link } from 'react-router-dom';
// import Seo from '../components/Seo';

const ErrorPage = () => {
	return (
		<>
			{/* <Seo title="Error" /> */}
			<main className="error-page">
				<div className="error-container">
					<h1>ooooops it's a dead end!</h1>
					<Link to="/" className="btn">
						back home
					</Link>
				</div>
			</main>
		</>
	);
};

export default ErrorPage;
