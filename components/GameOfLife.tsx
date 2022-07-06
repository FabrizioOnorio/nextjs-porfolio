import React from "react";
import Link from "next/link";
import { Link as LinkUi } from "@nextui-org/react";
import { BiWorld } from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";
import Image from "next/image";

export const GameOfLife: React.FC = () => {
	return (
		<article className="project-card">
			<div className="project-card-text">
				<h3>Game of Life</h3>
				<section className="project-card--links">
					<LinkUi href="/game-of-life" className="readMore">
						<a>
							Read more <BsFillArrowRightCircleFill />
						</a>
					</LinkUi>
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
			<Image
				objectFit="cover"
				width={200}
				height={200}
				src={"/guess-who.png"}
				alt={"prototype screenshots of the recipes project"}
				className="project-card-img"
			/>
		</article>
	);
};
