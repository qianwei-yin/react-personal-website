import Title from '../components/Title';
// import Seo from '../components/Seo';
import { stacks, images } from '../assets/constants/aboutMe';
import aboutImg from '../assets/images/aboutme.png';

const AboutPage = () => {
	return (
		<>
			{/* <Seo title="About Me" /> */}
			<section className="about-page">
				<div className="section-center about-center">
					<img src={aboutImg} alt="aboutme" className="about-img-svg" />
					<article className="about-text">
						<Title title="about me" />
						<p>
							I am a capable and reliable graduate student studying{' '}
							<strong>Computer Software Engineering</strong>.
						</p>
						<p>
							I am 'The Outstanding (Undergraduate) Student' for 3 years in Wuhan University (Top 10
							University in China).
						</p>
						<p>
							I am a diligent and stable intern who had an <strong>8-month</strong> internship in
							DidiChuxing (Top 1 mobile travel platform in China).
						</p>
						<p>
							I am a highly motivated and progress-focused student, with a long-standing background in
							this industry, at Northeastern University. With a proven track record of optimization
							mathematics and various kinds of CS stacks, I believe my experience and ability will fit
							well and prove to be valuable in any company.
						</p>
						<p>
							I have experience managing projects with excellence and am a capable and reliable
							problem-solver. In my previous internship, I contributed communication skills with other
							departments, time-management, quick self-learning and self-diving towards team efforts and
							business improvements. In order to reduce the burden of the tedious task of extracting data,
							I taught myself SQL and <strong>mentored</strong> other interns, so that the time spent on
							repetitive work per day was reduced <strong>from 4 hours to 0</strong>.
						</p>
						<p>
							I have a progressive mindset and keep up with changes in my industry. I have established
							myself as a productive team player with great delegating skills. I'm honored to join your
							team because of my enthusiasm for this industry and my respect for any company.
						</p>
						<div className="about-stack">
							{stacks.map((item, index) => {
								return <span key={index}>{item}</span>;
							})}
						</div>
					</article>
				</div>

				<div className="about-me">
					<h2>Cat Fanatic</h2>
					<h5>This is my cat Dongdong</h5>
					<div className="image-container">
						{images.cat.map((item, index) => {
							return <img src={`/about-me/${item}`} alt="a cat" key={index} className="about-img" />;
						})}
					</div>
				</div>

				<div className="about-me">
					<h2>Taylor Swifties</h2>
					<h5>I love her for 11 years</h5>
					<div className="image-container">
						{images.taylor.map((item, index) => {
							return (
								<img src={`/about-me/${item}`} alt="about taylor" key={index} className="about-img" />
							);
						})}
					</div>
				</div>

				<div className="about-me">
					<h2>iPhone Photographer</h2>
					<h5>I like to capture the beautiful moments of life</h5>
					<div className="image-container photo">
						{images.photography.map((item, index) => {
							return (
								<img src={`/about-me/${item}`} alt="photography" key={index} className="about-img" />
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutPage;
