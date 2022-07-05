import React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

export const GuessWho: React.FC = () => {
	return (
		<article className="project-card">
			<h3>Guess Who</h3>
			<section className="project-card--links">
				<Link href="https://guess-who-salt-game.herokuapp.com/">
					<a target="_blank">
						<BiWorld /> Visit the web page
					</a>
				</Link>

				<Link href="https://github.com/FabrizioOnorio/guess-who">
					<a target="_blank">
						<BsGithub /> GitHub Main project
					</a>
				</Link>
				<Link href="https://github.com/FabrizioOnorio/guess-who-socket">
					<a target="_blank">
						<BsGithub /> Socket.io Server
					</a>
				</Link>
			</section>
		</article>
	);
};
