import React from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";
import Image from "next/image";

export const GuessWho: React.FC = () => {
	return (
		<article className="project-card">
			<Image
				objectFit="cover"
				width={200}
				height={140}
				src={"/guess-who.png"}
				alt={"prototype screenshots of the recipes project"}
				className="project-card-img"
			/>
			<div className="project-card-text">
				<h3>Guess Who</h3>
				<section className="project-card--links">
					<Link href="/guess-who">
						<a className="card-link">
							Read more <BsFillArrowRightCircleFill />
						</a>
					</Link>

					<Link href="https://github.com/FabrizioOnorio/guess-who" passHref>
						<a target="_blank" className="card-link">
							GitHub project <BsGithub />
						</a>
					</Link>
					<Link
						href="https://github.com/FabrizioOnorio/guess-who-socket"
						passHref
					>
						<a target="_blank" className="card-link">
							Socket.io Server <BsGithub />
						</a>
					</Link>
				</section>
			</div>
		</article>
	);
};
