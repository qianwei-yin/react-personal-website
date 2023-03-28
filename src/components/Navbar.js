import { FaAlignRight } from 'react-icons/fa';
import pageLinks from '../assets/constants/pageLinks';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/" className="logo">
						Conway
					</Link>
					<button className="toggle-btn" type="button">
						<FaAlignRight />
					</button>
				</div>
				<div className="nav-links">
					{pageLinks.map((link) => {
						return (
							<Link to={link.url} key={link.id}>
								{link.text}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
