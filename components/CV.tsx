import React from "react";
import { Tooltip } from "@nextui-org/react";
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

export const CV: React.FC = () => {
	return (
		<section className="cv-section" id="cv">
			<section className="cv-section--content">
				<div className="text-center">
					<h2 className="text-3xl font-semibold mb-8">Experience</h2>
				</div>

				{/* Tech Stack Icons */}
				<section className="tech-stack mb-8">
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

				<div className="cv-container">
					{/* Work Experience */}
					<div className="cv-experience">
						<div className="cv-job">
							<div className="cv-job-header">
								<h3>Full Stack Developer</h3>
								<span className="cv-company">Rentelligent - Oslo</span>
							</div>
							<p className="cv-date">February 2025 - Present</p>
							<ul className="cv-description">
								<li>Full-stack development on Husleie.no, a B2C tenancy management platform</li>
								<li>Developing and implementing a new design system across parts of the platform to improve UI consistency and user experience</li>
								<li>Built and maintained backend services in Perl and frontend features with Vue, Inertia.js, and TypeScript</li>
								<li>Responsible for designing and implementing new functionality, improving existing systems, and ensuring reliable user experiences</li>
							</ul>
						</div>

						<div className="cv-job">
							<div className="cv-job-header">
								<h3>Full Stack Developer</h3>
								<span className="cv-company">Factlines - Oslo</span>
							</div>
							<p className="cv-date">January 2023 - February 2025</p>
							<ul className="cv-description">
								<li>Developed and maintained a platform launched in November 2023 to help companies manage ESG (Environmental, Social, and Governance) compliance</li>
								<li>Collaborated closely with designers to create user-friendly and technically robust solutions</li>
								<li>Used SvelteKit with TypeScript for a modern, efficient tech stack and PostgreSQL as the database solution</li>
								<li>End-to-end testing conducted using Playwright, while Vitest was used for database and unit testing</li>
								<li>Styled the platform with Tailwind CSS for responsive and customizable design</li>
							</ul>
						</div>

						<div className="cv-job">
							<div className="cv-job-header">
								<h3>Web Developer Consultant</h3>
								<span className="cv-company">Salt - Oslo</span>
							</div>
							<p className="cv-date">January 2022 - December 2022</p>
							<ul className="cv-description">
								<li>Developed various apps using React, Next.js, and Node.js</li>
								<li>Worked independently on projects as well as in teams</li>
								<li>Facilitated various sprint activities such as retrospectives, stand-ups, etc.</li>
							</ul>
						</div>
					</div>

					{/* Technical Skills */}
					<div className="cv-skills">
						<h3 className="cv-skills-title">Technical Skills</h3>

						<div className="cv-skill-category">
							<h4>Frontend</h4>
							<p>Sveltekit, React, Next.JS, Redux, HTML, CSS, Tailwind, Playwright, Vue</p>
						</div>

						<div className="cv-skill-category">
							<h4>General</h4>
							<p>JavaScript, TypeScript, Agile development, Vitest</p>
						</div>

						<div className="cv-skill-category">
							<h4>Backend</h4>
							<p>Node.js, PostgreSQL, SQL, Express, REST API, MongoDB, Perl</p>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};
