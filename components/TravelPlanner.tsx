import React from "react";
import { Link as LinkUi } from "@nextui-org/react";
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
					<LinkUi href="/travel-planner" className="readMore">
						<a>
							Read more <BsFillArrowRightCircleFill />
						</a>
					</LinkUi>
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
			</div>
		</article>
	);
};
