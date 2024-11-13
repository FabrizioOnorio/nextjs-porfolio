import React from "react";
import { FaReact, FaHtml5, FaGitSquare } from "react-icons/fa";
import {
	SiTypescript,
	SiJavascript,
	SiPostgresql,
	SiMongodb,
	SiExpress,
	SiRedux,
	SiNextdotjs,
	SiSvelte
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { Row, Spacer, Tooltip } from "@nextui-org/react";

export const TechStack: React.FC = () => {
	return (
		<section className="teck-stack-section" id="tech-stack">
			<section className="teck-stack-section--text">
				<Row justify="center" align="center">
					<h2 className="text-3xl font-semibold">Tech Stack</h2>
				</Row>
				<Spacer y={2} />

				<section className="teck-stack">
					<Tooltip content={"React"}>
						<FaReact className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"TypeScript"}>
						<SiTypescript className="teck-stack--element" />
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
					<Tooltip content={"SvelteKit"}>
						<SiSvelte className="teck-stack--element" />
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
					<Tooltip content={"MongoDB"}>
						<SiMongodb className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"Express"}>
						<SiExpress className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"Redux"}>
						<SiRedux className="teck-stack--element" />
					</Tooltip>
					<Tooltip content={"Next.js"}>
						<SiNextdotjs className="teck-stack--element" />
					</Tooltip>
				</section>
			</section>
		</section>
	);
};
