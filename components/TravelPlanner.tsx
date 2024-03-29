import React from "react";
import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";
import Image from "next/image";

export const TravelPlanner: React.FC = () => {
	return (
		<article className="project-card">
			<Image
				objectFit="cover"
				width={200}
				height={200}
				src={"/travel_planner.jpeg"}
				alt={"prototype screenshots of the travel planner project"}
				className="project-card-img"
			/>
			<div className="project-card-text">
				<h3>Travel Planner</h3>
				<section className="project-card--links">
					<Link href="/travel-planner">
						<a className="readMore">
							Read more <BsFillArrowRightCircleFill />
						</a>
					</Link>

					<Link href="https://github.com/FabrizioOnorio/travel_planner2">
						<a target="_blank">
							<BsGithub /> GitHub
						</a>
					</Link>
				</section>
			</div>
		</article>
	);
};
