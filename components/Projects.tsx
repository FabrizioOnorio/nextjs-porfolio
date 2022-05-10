import React from "react";
import { GuessWho } from "./GuessWho";
import { GoogleRecipes } from "./GoogleRecipes";
import { GameOfLife } from "./GameOfLife";
import { TravelPlanner } from "./TravelPlanner";
import { MarketPlace } from "./MarketPlace";

export const Projects: React.FC = () => {
	return (
		<>
			<GuessWho />
			<GoogleRecipes />
			<GameOfLife />
			<TravelPlanner />
			<MarketPlace />
		</>
	);
};
