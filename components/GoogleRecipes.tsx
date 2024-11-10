import React from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";
import Image from "next/image";

export const GoogleRecipes: React.FC = () => {
	return (
		<article className="project-card">
			<Image
				objectFit="cover"
				width={200}
				height={140}
				src={"/recipes-project.png"}
				alt={"prototype screenshots of the recipes project"}
				className="project-card-img"
			/>
			<div className="project-card-text">
				<h3>Google Recipes</h3>
				<section className="project-card--links">
					<Link href="/google-recipes">
						<a className="card-link">
							Read more <BsFillArrowRightCircleFill />
						</a>
					</Link>

					<Link href="https://github.com/FabrizioOnorio/recipesApp">
						<a target="_blank" className="card-link">
							GitHub <BsGithub />
						</a>
					</Link>
				</section>
			</div>
		</article>
	);
};
