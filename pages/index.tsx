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
			<section className="main-page">
				<Title />
				<Presentation />
			</section>
			<section className="teck-stack-section">
				<TeckStack />
			</section>
			<section className="projects-section">
				<Projects />
			</section>
			<section className="contacts-section">
				<Contacts />
			</section>
			<Footer />
		</section>
	);
};

export default Home;
