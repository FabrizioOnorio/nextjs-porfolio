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
import { Container, Row, Text, Spacer } from "@nextui-org/react";

export const TeckStack: React.FC = () => {
	return (
		<>
			<Row justify="center" align="center">
				<Text h2>Tech Stack</Text>
			</Row>

			<section className="teck-stack">
				<FaReact />
				<SiTypescript />
				<SiRubyonrails />
				<SiJavascript />
				<IoLogoCss3 />
				<FaHtml5 />
				<BsBootstrapFill />
				<BsGithub />
				<FaGitSquare />
				<SiPostgresql />
				<SiHeroku />
				<SiMongodb />
				<SiExpress />
				<SiRedux />
				<DiRuby />
			</section>
		</>
	);
};
