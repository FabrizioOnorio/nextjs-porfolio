import React from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";
import Image from "next/image";

export const MarketPlace: React.FC = () => {
	return (
		<section className="project-page-card">
			<h1>Market Place for Fabrics</h1>
			<section className="project-page-description">
				<Image
					objectFit="cover"
					width={350}
					height={350}
					src={"/fabrics.png"}
					alt={"prototype screenshots of a fabrics marketplace for a airbnb clone project"}
					className="project-page-img"
				/>
				<section className="project-page-text">
					<p>
						A Ruby on Rails Desktop-Web-App. This was our first team project
						in Le Wagon Coding Bootcamp.<br></br> This app provides an intuitive platform
						for selling and purchasing recycled fabrics, promoting sustainable fashion and reducing waste.
					</p>
					<section className="projects-page-links">
						<Link href="https://github.com/Sarowa158/fabrics_marketplace">
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
