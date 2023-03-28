const ProjectsCategory = ({ type, setType }) => {
	return (
		<div className="section-center">
			<div className="type-center">
				<button
					className={`${type === 'Large-Scale' ? 'active' : null} btn btn-primary`}
					onClick={() => setType('Large-Scale')}
				>
					Large-Scale
				</button>

				<button
					className={`${type === 'Front-End' ? 'active' : null} btn btn-primary`}
					onClick={() => setType('Front-End')}
				>
					Front-End
				</button>

				<button
					className={`${type === 'Functionality' ? 'active' : null} btn btn-primary`}
					onClick={() => setType('Functionality')}
				>
					Functionality
				</button>
			</div>
		</div>
	);
};
export default ProjectsCategory;
