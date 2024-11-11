import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

export const TravelPlanner: React.FC = () => {
	return (
		<section className="project-page-card">
		<h1>Travel Planner</h1>
			<section className="project-page-description">
				<Image
					objectFit="cover"
					width={350}
					height={350}
					src={"/travel_planner.jpeg"}
					alt={"prototype screenshots of the travel planner project"}
					className="project-page-img"
				/>
				<section className="project-page-text">
					<p>
						A Ruby on rails Mobile-Web-App to plan your trip based on covid
						travel restrictions.<br></br> To retrieve real data we used 2{" "}
						<Link href="https://developers.amadeus.com/">
							<a target="_blank">&quot;Amadeus for Developers&quot;</a>
						</Link>
						.
					</p>
					<section className="projects-page-links">
						<Link href="https://github.com/FabrizioOnorio/travel_planner2">
							<a target="_blank" className="card-link">
								<BsGithub /> Code on GitHub 
	 						</a>
						</Link>
					</section>
				</section>
			</section>
		</section>
	);
};
