import pageLinks from '../assets/constants/pageLinks';
import socialLinks from '../assets/constants/socialLinks';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ toggleSidebar, isOpen }) => {
	return (
		<aside className={`${isOpen ? 'show-sidebar' : null} sidebar`}>
			<button className="close-btn" type="button" onClick={toggleSidebar}>
				<FaTimes />
			</button>
			<div className="side-container">
				<ul className={isOpen ? 'sidebar-links' : null}>
					{pageLinks.map((link) => {
						return (
							<li key={link.id}>
								<Link to={link.url} onClick={toggleSidebar}>
									{link.text}
								</Link>
							</li>
						);
					})}
				</ul>
				<ul className={isOpen ? 'sidebar-icons social-links' : null}>
					{socialLinks.map((link) => {
						return (
							<li key={link.id}>
								<a href={link.url} className="social-link" target="_blank" rel="noreferrer">
									{link.icon}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
