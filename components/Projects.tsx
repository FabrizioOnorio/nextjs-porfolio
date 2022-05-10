import React from "react";
import { GuessWho } from "./GuessWho";
import { GoogleRecipes } from "./GoogleRecipes";
import { GameOfLife } from "./GameOfLife";
import { TravelPlanner } from "./TravelPlanner";
import { MarketPlace } from "./MarketPlace";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Spacer, Text, Row } from "@nextui-org/react";

export const Projects: React.FC = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1300 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1300, min: 750 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 750, min: 0 },
			items: 1,
		},
	};
	return (
		<Container>
			<Row justify="center" align="center">
				<Text h2>Projects</Text>
			</Row>
			<Spacer />
			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={false}
				removeArrowOnDeviceType={["mobile"]}
				autoPlaySpeed={100000}
			>
				<GuessWho />
				<GoogleRecipes />
				<GameOfLife />
				<TravelPlanner />
				<MarketPlace />
			</Carousel>
		</Container>
	);
};
