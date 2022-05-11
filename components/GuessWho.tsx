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

export const GuessWho: React.FC = () => {
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
							src={"/guess-who.png"}
							alt={"prototype screenshots of the recipes project"}
						/>
					</Card.Body>
					<section className="project--card">
						<Row justify="center" align="center">
							<Text h6 size={20} css={{ m: 0 }}>
								Guess Who
							</Text>
						</Row>
						<Spacer y={1} />

						<Text b size={14} css={{ m: 0 }}>
							This application is the implementation of the famous{" "}
							<Link href="https://en.wikipedia.org/wiki/Guess_Who%3F">
								<a target="_blank">Guess Who</a>
							</Link>{" "}
							game. The app was made using React with Typescript and Redux for
							the front-end, for the back-end we used Express together with a
							socket.io.
		
						</Text>

						<Collapse title="Links" divider={false}>
							{" "}
							<Link href="https://guess-who-salt-game.herokuapp.com/">
								<a target="_blank">Visit the heroku page</a>
							</Link>
							<Spacer y={0.5} />
							<Link href="https://github.com/FabrizioOnorio/guess-who">
								<a target="_blank">Code on GitHub for the main app</a>
							</Link>
							<Spacer y={0.5} />
							<Link href="https://github.com/FabrizioOnorio/guess-who-socket">
								<a target="_blank">Code on GitHub for the socket server</a>
							</Link>
						</Collapse>

					</section>
				</Card>
			</Grid>
		</Container>
	);
};
