import React, { useState } from 'react';

function Accordion({ image, title, frequency }) {
	const [active, setActive] = useState(null);

	const complex = (title) => {
		console.log(title);
	};

	return (
		<div className="accordion">
			<div
				onClick={() => setActive(!active) + complex(title)}
				className="accordion-header"
			>
				<h5>{title}</h5>
				<h5>{frequency}</h5>
			</div>
			{active && (
				<div className="accordion-body">
					<imput className="btn-left" type="image" />
					<imput className="radio-image" src={image} alt="" />
					<imput className="btn-rigth" type="image" />
				</div>
			)}
		</div>
	);
}

export default Accordion;
