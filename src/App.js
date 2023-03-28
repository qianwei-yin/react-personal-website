import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage, ContactPage, ErrorPage, HomePage, ProjectsPage, SingleProjectPage } from './pages';
import { Navbar, Footer } from './components';

function App() {
	const [type, setType] = useState('Large-Scale');

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage type={type} setType={setType} />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="projects" element={<ProjectsPage type={type} setType={setType} />} />
				<Route path="projects/:projectSlug" element={<SingleProjectPage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
