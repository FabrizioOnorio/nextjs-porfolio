import React from "react";
import { Row, Text } from "@nextui-org/react";

export const Title: React.FC = () => {
	return (
		<section className="title">
			<Row justify="center" align="center">
				<h1 className="fadeIn">Fabrizio Onorio</h1>
			</Row>
			<Row justify="center" align="center">
				<Text h3>Full-Stack Javascript Web Developer</Text>
			</Row>
		</section>
	);
};
