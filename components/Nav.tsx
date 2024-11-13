import React from "react";
import { Row, Spacer } from "@nextui-org/react";
import Link from "next/link";

export const Nav: React.FC = () => {
	return (
		<nav className="navbar">
			<Row justify="center" align="center">
				<Link href={"/#home"}>Home</Link>
				<Spacer y={2} />
				<Link href={"/#tech-stack"}>Tech Stack</Link>
				<Spacer y={2} />
				<Link href={"/#projects"}>Projects</Link>
				<Spacer y={2} />
				<Link href={"/#contact"}>Contact</Link>
			</Row>
		</nav>
	);
};
