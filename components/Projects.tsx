import React from "react";
import { GuessWho } from "./GuessWho";
import { GoogleRecipes } from "./GoogleRecipes";
import { GameOfLife } from "./GameOfLife";
import { TravelPlanner } from "./TravelPlanner";
import { MarketPlace } from "./MarketPlace";
import { Container, Spacer, Text, Row } from "@nextui-org/react";

export const Projects: React.FC = () => {

	return (
    <section className="projects-section" id={"projects"}>
      <h2>Projects</h2>
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
