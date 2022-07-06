import React from "react";
import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";

export const TravelPlanner: React.FC = () => {
	return (
		<article className="project-card">
			<h3>Travel Planner</h3>
			<section className="project-card--links">
				<Link href="/travel-planner" scroll>
					<a className="readMore">
						Read more <BsFillArrowRightCircleFill />
					</a>
				</Link>
				<Link href="http://www.traveld.eu/">
					<a target="_blank">
						<BiWorld /> Visit the web page
					</a>
				</Link>

				<Link href="https://github.com/FabrizioOnorio/travel_planner2">
					<a target="_blank">
						<BsGithub /> GitHub
					</a>
				</Link>
			</section>
		</article>
	);
};
