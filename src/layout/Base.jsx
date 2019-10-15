import React from 'react'
import CN from 'classnames'
import Slashed from '../components/Slashed'

export default function BasePage(props) {
	const isVisible = () => {
		return props.api ? props.api.getActiveSection().anchor === props.pageName : false;
	}

	return (
		<section className="section" data-anchor={props.pageName}>
			<div className={CN("container-fluid " + props.pageName, { "animate": isVisible() })}>
				<Slashed class="" text={props.pageName} />
				{props.children(isVisible(), props.api)}
			</div>
		</section>
	)
}