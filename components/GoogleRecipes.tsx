import React from "react";
import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";

export const GoogleRecipes: React.FC = () => {
	return (
		<article className="project-card">
			<h3>Google Recipes</h3>
			<section className="project-card--links">
				<Link href="/google-recipes#gr">
					<a className="readMore">
						Read more <BsFillArrowRightCircleFill />
					</a>
				</Link>
				<Link href="https://hackday-recipes-app.herokuapp.com/">
					<a target="_blank">
						<BiWorld /> Visit the web page
					</a>
				</Link>

				<Link href="https://github.com/FabrizioOnorio/recipesApp">
					<a target="_blank">
						<BsGithub /> GitHub
					</a>
				</Link>
			</section>
		</article>
	);
};
