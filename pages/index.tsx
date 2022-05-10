import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Presentation } from "../components/Presentation";
import { Title } from "../components/Title";
import { TeckStack } from "../components/TeckStack";
import { Projects } from "../components/Projects";
import { Contacts } from "../components/Contacts";
import { Spacer } from "@nextui-org/react";

const Home: NextPage = () => {
	return (
		<section>
			<section className="main-page">
				<Title />
				<Presentation />
			</section>
			<TeckStack />
			<Spacer />
			<Projects />
			<Spacer />
			<Contacts />
		</section>
	);
};

export default Home;
