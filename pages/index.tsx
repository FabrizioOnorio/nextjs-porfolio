import type { NextPage } from "next";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";
import { CV } from "../components/CV";
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
			<CV />
			<Projects />
			<Contacts />
			<Footer />
		</>
	);
};

export default Home;
