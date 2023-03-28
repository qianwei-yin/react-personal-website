import { useState } from 'react';
import Title from './Title';
import { FaAngleDoubleRight } from 'react-icons/fa';
import exps from '../assets/constants/jobs';

const Jobs = () => {
	const [value, setValue] = useState(0);
	const { company, position, companyUrl: url, date, description } = exps[value];

	return (
		<section className="section jobs">
			<Title title="experiences" />
			<div className="jobs-center">
				{/* btn container */}
				<div className="btn-container">
					{exps.map((exp, index) => {
						return (
							<button
								className={`${index === value ? 'active-btn' : null} job-btn`}
								key={index}
								onClick={() => setValue(index)}
							>
								{exp.company}
							</button>
						);
					})}
				</div>
				{/* job info */}
				<article className="job-info">
					<h3>{position}</h3>
					<a href={url} target="_blank" rel="noreferrer">
						<h4>{company}</h4>
					</a>
					<p className="job-date">{date}</p>
					{description.map((el, index) => {
						return (
							<div className="job-desc" key={index}>
								<FaAngleDoubleRight className="job-icon" />
								<p>{el}</p>
							</div>
						);
					})}
				</article>
			</div>
		</section>
	);
};

export default Jobs;
