import React from "react";
import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

export const NpmDownloads: React.FC = () => {
	return (
		<section className="project-page-card">	
		<h1>Npm Downloads</h1>
			<div className="project-page-description">
				<Image
					objectFit="cover"
					width={350}
					height={350}
					src={"/npmDownloads.png"}
					alt={"prototype screenshots of the npm downloads project"}
					className="project-page-img"
				/>
				<section className="project-page-text">
					<p>
						This is a full-stack Next.JS application. For the data
						visualization I used Victory, which is an  ecosystem of composable React components
						for building interactive data visualizations.
					</p>
					<section className="projects-page-links">
						<Link href="https://npm-download-count.vercel.app/">
						<a target="_blank" className="card-link">
		 					<BiWorld /> Visit the page 
	 					</a>
						</Link>

						<Link href="https://github.com/FabrizioOnorio/npm-download-count">
							<a target="_blank" className="card-link">
								<BsGithub /> Code on GitHub 
	 						</a>
						</Link>
					</section>
				</section>
			</div>
		</section>
	);
};