import React from "react";
import { Row, Text, Spacer } from "@nextui-org/react";

export const Nav: React.FC = () => {
	return (
		<nav className="navbar">
			<Row justify="center" align="center">
				<Text h5>Home</Text>
				<Spacer y={2} />
				<Text h5>Teck Stack</Text>
				<Spacer y={2} />
				<Text h5>Projects</Text>
				<Spacer y={2} />
				<Text h5>Contacts</Text>
			</Row>
		</nav>
	);
};
