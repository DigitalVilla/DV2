import React from 'react'

export default function Slashed(props) {
	const title = props.text || 'Slashed';
	const clase = props.className || '';
	return (
		<div className={"slashed "+ clase}>
			<div className="top" title={title}></div>
			<div className="bot" title={title}></div>
		</div>
	)
}
