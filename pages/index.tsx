import type { NextPage } from "next";
import { Presentation } from "../components/Presentation";
import { TechStack } from "../components/TechStack";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<Nav />
			<Presentation />
			<TechStack />
			<Projects />
			<Contacts />
			<Footer />
		</>
	);
};

export default Home;
