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
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff"></meta>
			</Head>
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
