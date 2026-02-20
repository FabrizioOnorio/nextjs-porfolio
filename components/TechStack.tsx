import React from "react";
import { FaReact, FaHtml5, FaGitSquare } from "react-icons/fa";
import {
	SiTypescript,
	SiJavascript,
	SiPostgresql,
	SiMongodb,
	SiExpress,
	SiNextdotjs,
	SiSvelte,
	SiVuedotjs,
	SiGitlab
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { Row, Spacer, Tooltip } from "@nextui-org/react";

export const TechStack: React.FC = () => {
	return (
		<section className="tech-stack-section" id="tech-stack">
			<section className="tech-stack-section--text">
				<Row justify="center" align="center">
					<h2 className="text-3xl font-semibold">Tech Stack</h2>
				</Row>
				<Spacer y={2} />

				<section className="tech-stack">
					<Tooltip content={"React"}>
						<FaReact className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"Vue.js"}>
						<SiVuedotjs className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"TypeScript"}>
						<SiTypescript className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"JavaScript"}>
						<SiJavascript className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"CSS"}>
						<IoLogoCss3 className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"HTML5"}>
						<FaHtml5 className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"SvelteKit"}>
						<SiSvelte className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"GitHub"}>
						<BsGithub className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"GitLab"}>
						<SiGitlab className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"Git"}>
						<FaGitSquare className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"Postgresql"}>
						<SiPostgresql className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"MongoDB"}>
						<SiMongodb className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"Express"}>
						<SiExpress className="tech-stack--element" />
					</Tooltip>
					<Tooltip content={"Next.js"}>
						<SiNextdotjs className="tech-stack--element" />
					</Tooltip>
				</section>
			</section>
		</section>
	);
};
