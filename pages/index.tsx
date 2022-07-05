/* eslint-disable @next/next/no-document-import-in-page */
import type { NextPage } from "next";
import { Presentation } from "../components/Presentation";
import { Title } from "../components/Title";
import { TeckStack } from "../components/TeckStack";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
	return (
		<section>

			<Nav />
			<section className="main-page" id={"home"}>
				<section className="main-page--text">
					<Title />
					<Presentation />
				</section>
			</section>
			<section className="teck-stack-section" id={"teck-stack"}>
				<section className="teck-stack-section--text">
					<TeckStack />
				</section>
			</section>
			<section className="projects-section" id={"projects"}>
				<Projects />
			</section>
			<section className="contacts-section" id={"contacts"}>
				<section className="contacts-section--text">
					<Contacts />
				</section>
			</section>
			<Footer />
		</section>
	);
};

export default Home;
