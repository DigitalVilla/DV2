import React from "react"
import logo_DV from "../images/logo_DV.png"
import { useStaticQuery, graphql } from 'gatsby'

const Banner = (props) => {
	const { site: { siteMetadata } } = useStaticQuery(graphql`
		query meta {
			site {
				siteMetadata {
					description
					location
					author
					title
				}
			}
		}
	`);

	const meta = siteMetadata;


	return (
		<div className="header noSelect">
			<img className="main-logo" src={logo_DV} alt="DV" />
			<h1>
				{`${meta.title} is a ${meta.description} by ${siteMetadata.author}. location ${siteMetadata.location}`}
			</h1>
			<div className="title">
				<span>Digital </span>
				<span className="break"></span>
				<span>Villa</span>
			</div>
			<h2>
				{props.text1}<span className="break"></span>{props.text2}
			</h2>
			{props.children}
		</div>
	)
}

export default Banner
