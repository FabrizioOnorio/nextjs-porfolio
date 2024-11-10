import React from "react";
import { GuessWho } from "./GuessWho";
import { GoogleRecipes } from "./GoogleRecipes";
import { GameOfLife } from "./GameOfLife";
import { TravelPlanner } from "./TravelPlanner";
import { MarketPlace } from "./MarketPlace";
import { NpmDownloads } from "./NpmDownloads";
import { Row } from "@nextui-org/react";

export const Projects: React.FC = () => {

	return (
		<section className="projects-section" id="projects">
			<Row justify="center" align="center">
					<h2 className="text-3xl font-semibold mt-14">Projects</h2>
			</Row>
			<section className="projects-section--projects">
				<NpmDownloads />
				<GuessWho />
				<GoogleRecipes />
				<TravelPlanner />
				<GameOfLife />
				<MarketPlace />
			</section>
		</section>
	);
};
