import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

export const GuessWho: React.FC = () => {
	return (
		<section className="project-page-card">	
				<h4>Guess Who Game</h4>
				<section className="project-page-description">
					<Image
						objectFit="cover"
						width={350}
						height={350}
						src={"/guess-who.png"}
						alt={"prototype screenshots of the recipes project"}
						className="project-page-img"
					/>
					<section className="project-page-text">
						<p>
							This application is the implementation of the famous{" "}
							<Link href="https://en.wikipedia.org/wiki/Guess_Who%3F">
								<a target="_blank">Guess Who</a>
							</Link>{" "}
							game.<br></br> The app was made using React with Typescript and
							Redux for the front-end, for the back-end we used Express together
							with a socket.io.
						</p>
						<section className="projects-page-links">
							<Link href="https://github.com/FabrizioOnorio/guess-who">
								<a target="_blank" className="card-link">
									<BsGithub /> GitHub project 
								</a>
							</Link>
							<Link href="https://github.com/FabrizioOnorio/guess-who-socket">
								<a target="_blank" className="card-link">
									<BsGithub /> Socket.io Server 
								</a>
							</Link>
						</section>
					</section>
				</section>
			</section>
	);
};
