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

export const GameOfLife: React.FC = () => {
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
							src={"/game-of-life-picture.png"}
							alt={"prototype screenshots of the game of life project"}
						/>
					</Card.Body>
					<section className="project--card">
						<Row justify="center" align="center">
							<Text h6 size={20} css={{ m: 0 }}>
								Conway&apos;s Game of Life
							</Text>
						</Row>
						<Spacer y={0.5} />
						<Link href="https://game-of-life-on-react-fabrizioonorio.vercel.app/">
							<a target="_blank">Visit the Vercel page for the React App</a>
						</Link>
						<Spacer y={0.5} />
						<Link href="https://game-of-life-fab.herokuapp.com/">
							<a target="_blank">Visit the Heroku page for the Rails App</a>
						</Link>
						<Spacer y={0.5} />
						<Link href="https://github.com/FabrizioOnorio/game_of_life_on_react">
							<a target="_blank">Code on GitHub (React App)</a>
						</Link>
						<Spacer y={0.5} />
						<Link href="https://github.com/FabrizioOnorio/game-of-life">
							<a target="_blank">Code on GitHub (Rails App)</a>
						</Link>
						<Spacer y={0.5} />
						<Collapse title="About the App">
							<Text b size={14} css={{ m: 0 }}>
								This application is the implementation of the famous{" "}
								<Link href="https://en.wikipedia.org/wiki/Guess_Who%3F">
									<a target="_blank">Guess Who</a>
								</Link>{" "}
								game.
								<Spacer y={0.5} />
								This is the implementation of the famous Conway&apos;s game of
								life.
								<Spacer y={0.5} />I made this Game both on React and on Rails
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
