import React from "react";
import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

export const GameOfLife: React.FC = () => {
	return (
		<section className="project-page-card">
			<h1>Conway&apos;s Game of Life</h1>
			<section className="project-page-description">
				<Image
					objectFit="cover"
					width={350}
					height={350}
					src={"/game-of-life-picture.png"}
					alt={"prototype screenshots of the game of life project"}
					className="project-page-img"
				/>
				<section className="project-page-text">
					<p>
						This is the implementation of the famous Conway&apos;s game of
						life. I made this Game both on React and on Rails.
					</p>
					<section className="projects-page-links">
						<Link href="https://game-of-life-on-react-fabrizioonorio.vercel.app/">
							<a target="_blank" className="card-link"> 
								<BiWorld /> Visit the Vercel page for the React App
							</a>
						</Link>
						<Link href="https://github.com/FabrizioOnorio/game_of_life_on_react">
							<a target="_blank" className="card-link">
								<BsGithub /> Code on GitHub (React App)
	 						</a>
						</Link>
						<Link href="https://github.com/FabrizioOnorio/game-of-life">
							<a target="_blank" className="card-link">
								<BsGithub /> Code on GitHub (Rails App)
	 						</a>
						</Link>
					</section>
				</section>
			</section>
		</section>
	);
};
