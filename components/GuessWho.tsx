import React from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";

export const GuessWho: React.FC = () => {
	return (
		<article className="project-card">
			<Image
				objectFit="cover"
				width={200}
				height={200}
				src={"/guess-who.png"}
				alt={"prototype screenshots of the recipes project"}
				className="project-card-img"
			/>
			<div className="project-card-text">
				<h3>Guess Who</h3>
				<section className="project-card--links">
					<Link href="/guess-who">
						<a className="readMore">
							Read more <BsFillArrowRightCircleFill />
						</a>
					</Link>
					{/* <Link href="https://guess-who-salt-game.herokuapp.com/" passHref>
						<a target="_blank">
							<BiWorld /> Visit the web page
						</a>
					</Link> */}

					<Link href="https://github.com/FabrizioOnorio/guess-who" passHref>
						<a target="_blank">
							<BsGithub /> GitHub Main project
						</a>
					</Link>
					<Link
						href="https://github.com/FabrizioOnorio/guess-who-socket"
						passHref
					>
						<a target="_blank">
							<BsGithub /> Socket.io Server
						</a>
					</Link>
				</section>
			</div>
		</article>
	);
};
