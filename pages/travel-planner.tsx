import type { NextPage } from "next";
import { Background } from "../components/Particles";
import Image from "next/image";
import Link from "next/link";

const TravelPlannerPage: NextPage = () => {
	return (
		<>
			<Background />
			<section className="project-page-section">
				<h1>Guess Who Game</h1>
				<section className="project-page-description">
					<Image
						objectFit="cover"
						width={350}
						height={350}
						src={"/guess-who.png"}
						alt={"prototype screenshots of the recipes project"}
						className="project-page-img"
					/>
					<section className="project-page-text">
						<p>
							This application is the implementation of the famous{" "}
							<Link href="https://en.wikipedia.org/wiki/Guess_Who%3F">
								<a target="_blank">Guess Who</a>
							</Link>{" "}
							game.<br></br> The app was made using React with Typescript and
							Redux for the front-end, for the back-end we used Express together
							with a socket.io.
						</p>
						<section className="projects-page-links">
							<Link href="https://guess-who-salt-game.herokuapp.com/">
								<a target="_blank">Visit the heroku page</a>
							</Link>
							<Link href="https://github.com/FabrizioOnorio/guess-who">
								<a target="_blank">Code on GitHub for the main app</a>
							</Link>
							<Link href="https://github.com/FabrizioOnorio/guess-who-socket">
								<a target="_blank">Code on GitHub for the socket server</a>
							</Link>
						</section>
					</section>
				</section>
			</section>
		</>
	);
};

export default TravelPlannerPage;
