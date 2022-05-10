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

export const TeckStack: React.FC = () => {
	return (
		<>
			<h2>Tech Stack</h2>
			<section>
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
