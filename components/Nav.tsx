import React from "react";
import { Row, Text, Spacer } from "@nextui-org/react";
import Link from "next/link";

export const Nav: React.FC = () => {
	return (
		<nav className="navbar">
			<Row justify="center" align="center">
				<Link href={"#home"}>Home</Link>
				<Spacer y={2} />
				<Link href={"#teck-stack"}>Teck Stack</Link>
				<Spacer y={2} />
				<Link href={"#projects"}>Projects</Link>
				<Spacer y={2} />
				<Link href={"#contacts"}>Contacts</Link>
			</Row>
		</nav>
	);
};
