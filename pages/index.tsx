import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Presentation } from "../components/Presentation";
import { Title } from "../components/Title";
import { TeckStack } from "../components/TeckStack";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";

const Home: NextPage = () => {
	return (
		<div>
			<Title />
			<Presentation />
			<TeckStack />
			<Projects />
			<Contacts />
		</div>
	);
};

export default Home;
