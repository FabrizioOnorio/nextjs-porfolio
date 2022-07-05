import type { NextPage } from "next";
import { Presentation } from "../components/Presentation";
import { TeckStack } from "../components/TeckStack";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
	return (
		<>
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
