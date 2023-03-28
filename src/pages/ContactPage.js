// import Seo from '../components/Seo';
import { useState } from 'react';

const ContactPage = () => {
	const [formNote, setFormNote] = useState('Get in touch with me!');
	const [pending, setPending] = useState(false);

	const handleSubmit = (event) => {
		setPending(true);
		event.preventDefault();

		const myForm = event.target;
		const formData = new FormData(myForm);

		fetch('/', {
			method: 'POST',
			// headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => setFormNote('Thanks for contacting!'))
			.catch((error) => setFormNote('There was an error...'))
			.then(() => setPending(false));
	};

	return (
		<>
			{/* <Seo title="Contact" /> */}
			<section className="contact-page">
				<article className="contact-form">
					<h3>{formNote}</h3>
					<form name="house-contact" data-netlify="true" onSubmit={handleSubmit}>
						<div className="form-group">
							<input type="text" name="name" placeholder="name" className="form-control" />
							<input type="email" name="email" placeholder="email" className="form-control" />
							<textarea name="message" rows="5" placeholder="message" className="form-control" />
						</div>
						<button type="submit" className="submit-btn btn" disabled={pending}>
							submit here
						</button>
					</form>
				</article>
			</section>
		</>
	);
};

export default ContactPage;
