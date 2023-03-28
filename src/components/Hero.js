import { Link } from 'react-router-dom';
import socialLinks from '../assets/constants/socialLinks';
import heroImg from '../assets/images/hero-image.png';

const Hero = () => {
	return (
		<header className="hero">
			<section className="section-center hero-center">
				<article className="hero-info">
					<div>
						<div className="underline"></div>
						<h1>i'm Qianwei</h1>
						<h4>M.S. in information systems</h4>
						<h4>web developing lover</h4>
						<h4>cat fanatic</h4>
						<h4>swifties</h4>
						<Link to="contact" className="btn">
							contact me
						</Link>
						<div className="social-links">
							{socialLinks.map((link) => {
								return (
									<a
										href={link.url}
										key={link.id}
										className="social-link"
										target="_blank"
										rel="noreferrer"
									>
										{link.icon}
									</a>
								);
							})}
						</div>
					</div>
				</article>
				<img src={heroImg} alt="portfolio" className="hero-img" />
			</section>
		</header>
	);
};

export default Hero;
