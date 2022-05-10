import React from "react";
import Link from "next/link";

import {
	Container,
	Card,
	Row,
	Text,
	Spacer,
	Grid,
	Collapse,
} from "@nextui-org/react";

export const GoogleRecipes: React.FC = () => {
	return (
		<Container>
			<Grid xs={12} justify="center">
				<Card>
					<Card.Body css={{ p: 0 }}>
						<Card.Image
							objectFit="cover"
							width="100%"
							height={350}
							maxDelay={10000}
							src={"/recipes-project.png"}
							alt={"prototype screenshots of the recipes project"}
						/>
					</Card.Body>
					<section className="project--card">
						<Row justify="center" align="center">
							<Text h6 size={20} css={{ m: 0 }}>
								Google Recipes
							</Text>
						</Row>
						<Spacer y={0.5} />
						<Link href="https://hackday-recipes-app.herokuapp.com/">
							<a target="_blank">Visit the heroku page</a>
						</Link>
						<Spacer y={0.5} />
						<Link href="https://github.com/FabrizioOnorio/recipesApp">
							<a target="_blank">Code on GitHub</a>
						</Link>
						<Spacer y={3.95} />
						<Collapse title="About the App">
							<Text b size={14} css={{ m: 0 }}>
								I made this application using React with Typescript for the
								front-end, for the back-end I used Express.
								<Spacer y={0.5} />
								This project was made for Hackday in Salt.
								<Spacer y={0.5} />
							</Text>
						</Collapse>
						<Spacer y={0.5} />
					</section>
				</Card>
			</Grid>
		</Container>
	);
};
