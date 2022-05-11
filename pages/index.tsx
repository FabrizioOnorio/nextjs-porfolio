import type { NextPage } from "next";
import { Presentation } from "../components/Presentation";
import { Title } from "../components/Title";
import { TeckStack } from "../components/TeckStack";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<section>
			<Head>
				<title>Fabrizio Onorio - Javascript Web Developer</title>
				<meta
					name="description"
					content="Fabrizio Onorio - Javascript Web Developer"
				/>
				<meta property="og:type" content="website" />
				<meta
					name="og:title"
					property="og:title"
					content="Fabrizio Onorio - Javascript Web Developer"
				/>
				<meta
					name="og:description"
					property="og:description"
					content="Fabrizio Onorio - Javascript Web Developer"
				/>
				<link rel="icon" type="image/png" href="/static/images/favicon.ico" />
				<link rel="apple-touch-icon" href="/static/images/favicon.ico" />
			</Head>
			<Nav />
			<section className="main-page" id={"home"}>
				<Title />
				<Presentation />
			</section>
			<section className="teck-stack-section" id={"teck-stack"}>
				<TeckStack />
			</section>
			<section className="projects-section" id={"projects"}>
				<Projects />
			</section>
			<section className="contacts-section" id={"contacts"}>
				<Contacts />
			</section>
			<Footer />
		</section>
	);
};

export default Home;
