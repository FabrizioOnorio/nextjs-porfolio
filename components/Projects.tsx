import React from "react";
import { GuessWho } from "./GuessWho";
import { GoogleRecipes } from "./GoogleRecipes";
import { GameOfLife } from "./GameOfLife";
import { TravelPlanner } from "./TravelPlanner";
import { MarketPlace } from "./MarketPlace";
import { NpmDownloads } from "./NpmDownloads";

export const Projects: React.FC = () => {

	return (
		<section className="projects-section" id={"projects"}>
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
