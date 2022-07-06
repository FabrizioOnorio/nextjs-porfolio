import React from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

export const GuessWho: React.FC = () => {
	return (
		<article className="project-card">
			<h3>Guess Who</h3>
			<section className="project-card--links">
				<a className="readMore" href="/guess-who">
					Read more <BsFillArrowRightCircleFill />
				</a>
				<Link href="https://guess-who-salt-game.herokuapp.com/" passHref>
					<a target="_blank">
						<BiWorld /> Visit the web page
					</a>
				</Link>

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
		</article>
	);
};
