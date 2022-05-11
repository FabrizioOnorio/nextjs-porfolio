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

export const MarketPlace: React.FC = () => {
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
							src={"/fabrics.png"}
							alt={"prototype screenshots of the fabrics airbnb clone project"}
						/>
					</Card.Body>
					<section className="project--card">
						<Row justify="center" align="center">
							<Text h6 size={20} css={{ m: 0 }}>
								Market Place for Fabrics
							</Text>
						</Row>
						<Spacer y={1} />

						<Text b size={14} css={{ m: 0 }}>
							A Ruby on Rails Desktop-Web-App. This was our first team project
							in Le Wagon Coding Bootcamp.
							<Spacer y={0.5} />
							The use if for selling recycled fabrics.
						</Text>
						<Spacer y={0.8} />
						<Collapse title="Links" divider={false}>
							{" "}
							<Link href="https://github.com/Sarowa158/fabrics_marketplace">
								<a target="_blank">Code on GitHub</a>
							</Link>
						</Collapse>
					</section>
				</Card>
			</Grid>
		</Container>
	);
};
