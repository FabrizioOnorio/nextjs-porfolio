import type { NextPage } from "next";
import { Background } from "../components/Particles";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

const GoogleRecipesPage: NextPage = () => {
	return (
		<>
			<Background />
			<section className="project-page-section">
      <Nav />
				<h1>Google Recipes</h1>
				<section className="project-page-description">
					<Image
						objectFit="cover"
						width={350}
						height={350}
						src={"/recipes-project.png"}
						alt={"prototype screenshots of the recipes project"}
						className="project-page-img"
					/>
					<section className="project-page-text">
						<p>
							I made this application using React with Typescript for the
							front-end, for the back-end I used Express.<br></br> This project was made
							for Hackday in Salt.
						</p>
						<section className="projects-page-links">
							{/* <Link href="https://hackday-recipes-app.herokuapp.com/">
								<a target="_blank">Visit the heroku page</a>
							</Link> */}

							<Link href="https://github.com/FabrizioOnorio/recipesApp">
								<a target="_blank">Code on GitHub</a>
							</Link>
						</section>
					</section>
				</section>
			</section>
      <Footer />
		</>
	);
};

export default GoogleRecipesPage;
