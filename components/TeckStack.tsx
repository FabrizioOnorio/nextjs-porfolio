import React from "react";
import { FaReact, FaHtml5, FaGitSquare } from "react-icons/fa";
import {
	SiTypescript,
	SiRubyonrails,
	SiJavascript,
	SiPostgresql,
	SiHeroku,
	SiMongodb,
	SiExpress,
	SiRedux,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { DiRuby } from "react-icons/di";
import { BsBootstrapFill, BsGithub } from "react-icons/bs";
import { Row, Text, Spacer } from "@nextui-org/react";

export const TeckStack: React.FC = () => {
	return (
		<section className="teck-stack-section" id={"teck-stack"}>
			<section className="teck-stack-section--text">
				<Row justify="center" align="center">
					<Text h2>Tech Stack</Text>
				</Row>
				<Spacer y={2} />

				<section className="teck-stack">
					<FaReact className="teck-stack--element" />
					<SiTypescript className="teck-stack--element" />
					<SiRubyonrails className="teck-stack--element" />
					<SiJavascript className="teck-stack--element" />
					<IoLogoCss3 className="teck-stack--element" />
					<FaHtml5 className="teck-stack--element" />
					<BsBootstrapFill className="teck-stack--element" />
					<BsGithub className="teck-stack--element" />
					<FaGitSquare className="teck-stack--element" />
					<SiPostgresql className="teck-stack--element" />
					<SiHeroku className="teck-stack--element" />
					<SiMongodb className="teck-stack--element" />
					<SiExpress className="teck-stack--element" />
					<SiRedux className="teck-stack--element" />
					<DiRuby className="teck-stack--element" />
				</section>
			</section>
		</section>
	);
};
