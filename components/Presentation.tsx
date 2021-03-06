import React from "react";
import Link from "next/link";
import { Spacer } from "@nextui-org/react";
import { Title } from "./Title";

export const Presentation: React.FC = () => {
	return (
		<section className="main-page" id={"home"}>
			<section className="main-page--text">
				<Title />
				<section className="presentation-description">
					<Spacer y={1} />
					<h4>
						I love using code, for making products that people love using.{" "}
					</h4>
				</section>
			</section>
		</section>
	);
};
