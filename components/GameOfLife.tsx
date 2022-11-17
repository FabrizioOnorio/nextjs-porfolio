import React from "react";
import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";
import Image from "next/image";

export const GameOfLife: React.FC = () => {
	return (
		<article className="project-card">
			<Image
				objectFit="cover"
				width={200}
				height={200}
				src={"/game-of-life-picture.png"}
				alt={"prototype screenshots of the game of life project"}
				className="project-card-img"
			/>
			<div className="project-card-text">
				<h3>Game of Life</h3>
				<section className="project-card--links">
					<Link href="/game-of-life">
						<a className="readMore">
							Read more <BsFillArrowRightCircleFill />
						</a>
					</Link>
					<Link href="https://game-of-life-on-react-fabrizioonorio.vercel.app/">
						<a target="_blank">
							<BiWorld /> Visit the web page
						</a>
					</Link>

					<Link href="https://github.com/FabrizioOnorio/game_of_life_on_react">
						<a target="_blank">
							<BsGithub /> GitHub
						</a>
					</Link>
				</section>
			</div>
		</article>
	);
};
