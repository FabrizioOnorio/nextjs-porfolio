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
	SiNextdotjs,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { DiRuby } from "react-icons/di";
import { BsBootstrapFill, BsGithub } from "react-icons/bs";
import { Row, Spacer, Tooltip } from "@nextui-org/react";

export const TeckStack: React.FC = () => {
	return (
		<section className="teck-stack-section" id={"teck-stack"}>
			<section className="teck-stack-section--text">
				<Row justify="center" align="center">
					<h2>Tech Stack</h2>
				</Row>
				<Spacer y={2} />

				<section className="teck-stack">
					<Tooltip content={"React"}>
						<FaReact className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"TypeScript"}>
						<SiTypescript className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"Ruby on Rails"}>
						<SiRubyonrails className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"JavaScript"}>
						<SiJavascript className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"CSS"}>
						<IoLogoCss3 className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"HTML5"}>
						<FaHtml5 className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"Bootstrap"}>
						<BsBootstrapFill className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"GitHub"}>
						<BsGithub className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"Git"}>
						<FaGitSquare className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"Postgresql"}>
						<SiPostgresql className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"Heroku"}>
						<SiHeroku className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"MongoDB"}>
						<SiMongodb className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"Express"}>
						<SiExpress className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"Redux"}>
						<SiRedux className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"Ruby"}>
						<DiRuby className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"Next.js"}>
						<SiNextdotjs className="teck-stack--element" />
					</Tooltip>
				</section>
			</section>
		</section>
	);
};
