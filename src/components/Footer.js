import socialLinks from '../assets/constants/socialLinks';

const Footer = () => {
	return (
		<footer className="footer">
			<div>
				<div className="footer-links social-links">
					{socialLinks.map((link) => {
						return (
							<a href={link.url} key={link.id} className="social-link" target="_blank" rel="noreferrer">
								{link.icon}
							</a>
						);
					})}
				</div>
				<h4>
					copyright &copy; {new Date().getFullYear()} <span>Qianwei Yin</span> all rights reserved
				</h4>
			</div>
		</footer>
	);
};

export default Footer;
