import React from "react";
import { GuessWho } from "./GuessWho";
import { GoogleRecipes } from "./GoogleRecipes";
import { GameOfLife } from "./GameOfLife";
import { TravelPlanner } from "./TravelPlanner";
import { MarketPlace } from "./MarketPlace";

export const Projects: React.FC = () => {

	return (
    <section className="projects-section" id={"projects"}>
			<section className="projects-section--projects">
				<GuessWho />
				<GoogleRecipes />
				<TravelPlanner />
				<GameOfLife />
				<MarketPlace />
			</section>
		</section>
	);
};
