import React from "react";
import { Row } from "@nextui-org/react";
import Link from "next/link";

export const Footer: React.FC = () => {
	return (
		<nav className="footer">
			<Row justify="center" align="center">
				<p>Created by <Link href="https://github.com/FabrizioOnorio">
								<a target="_blank">Fabrizio</a>
							</Link></p>
			</Row>
		</nav>
	);
};
