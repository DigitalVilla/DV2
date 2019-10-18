import React from 'react'
import poster from "../constants/poster";

const Laptop = ({className,  }) => {
	return (
		<div className={"laptop "+ className}>
			<div className="laptop-top">
				<div className="laptop-top-screen" style={{ backgroundImage: `url(${poster})`}}></div>
			</div>
			<div className="laptop-bottom"></div>
		</div>
	)
}

export default Laptop
