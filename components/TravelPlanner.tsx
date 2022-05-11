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

export const TravelPlanner: React.FC = () => {
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
							src={"/travel_planner.jpeg"}
							alt={"prototype screenshots of the travel planner project"}
						/>
					</Card.Body>
					<section className="project--card">
						<Row justify="center" align="center">
							<Text h6 size={20} css={{ m: 0 }}>
								Travel Planner
							</Text>
						</Row>
						<Spacer y={1} />

						<Text b size={14} css={{ m: 0 }}>
							A Ruby on rails Mobile-Web-App to plan your trip based on covid
							travel restrictions.
							<Spacer y={0.5} />
							To retrieve real data we used 2{" "}
							<Link href="https://developers.amadeus.com/">
								<a target="_blank">&quot;Amadeus for Developers&quot;</a>
							</Link>
							.
						</Text>
						<Spacer y={0.8} />
						<Collapse title="Links" divider={false}>
							<Link href="http://www.traveld.eu/">
								<a target="_blank">Visit traveld.eu</a>
							</Link>
							<Spacer y={0.5} />
							<Link href="https://github.com/FabrizioOnorio/travel_planner2">
								<a target="_blank">Code on GitHub</a>
							</Link>
						</Collapse>
					</section>
				</Card>
			</Grid>
		</Container>
	);
};
