import React from "react";
import Link from "next/link";
import { Text, Spacer } from "@nextui-org/react";
import { Title } from "./Title";

export const Presentation: React.FC = () => {
	return (
		<section className="main-page" id={"home"}>
			<section className="main-page--text">
				<Title />
				<section className="presentation-description">
					<Spacer y={1.5} />
					<Text b>
						I love using code, for making products that people love to use.{" "}
					</Text>
					<Spacer y={2} />

					<Link href={"#projects"}>
						<a className={"projects-button"}>My projects</a>
					</Link>
					<Spacer />
				</section>
			</section>
		</section>
	);
};
