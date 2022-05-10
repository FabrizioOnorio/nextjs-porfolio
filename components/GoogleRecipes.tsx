import React from "react";
import Link from "next/link";
import Image from "next/image";

export const GoogleRecipes: React.FC = () => {
	return (
		<>
			<div>
				<h3>google recipes</h3>

				<div>
					<div>
						<Link href="https://hackday-recipes-app.herokuapp.com/">
							<a target="_blank">
								<p>Visit the heroku page</p>
							</a>
						</Link>
						<p>
							I made this application using React with Typescript for the
							front-end and Express for the back-end.
							<br />
							This project was made for Hackday in Salt.
						</p>
						<p>
							<Link href="https://github.com/FabrizioOnorio/recipesApp">
								<a target="_blank">Code on GitHub</a>
							</Link>
						</p>
					</div>
				</div>
				<div>
					<Image
						src={"/recipes-project.png"}
						alt={"prototype screenshots of the recipes project"}
						width={200}
						height={200}
					/>
				</div>
			</div>
		</>
	);
};
