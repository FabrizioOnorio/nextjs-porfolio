import type { NextPage } from "next";
import { Presentation } from "../components/Presentation";
import { TeckStack } from "../components/TeckStack";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Background } from "../components/Particles";

const Home: NextPage = () => {
	return (
		<>
      		<Background />
			<Header />
			<Nav />
			<Presentation />
			<TeckStack />
			<Projects />
			<Contacts />
			<Footer />
		</>
	);
};

export default Home;
