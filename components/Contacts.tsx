import React from "react";
import { FaGithubSquare, FaLinkedin, FaGitlab } from "react-icons/fa";
import Link from "next/link";
import { Row, Spacer } from "@nextui-org/react";

export const Contacts: React.FC = () => {
	return (
		<section className="contacts-section" id="contact">
			<section className="contacts-section--text">
				<Spacer />
				<Row justify="center" align="center">
					<h2 className="text-3xl font-semibold">Get In Touch</h2>
				</Row>
				<Spacer y={2} />
				<Row justify="center" align="center">
					<Link href="https://github.com/FabrizioOnorio/">
						<a className="contact-button" target="_blank">
							<FaGithubSquare className="contact-icon" />
						</a>
					</Link>
					<Spacer />
					<Link href="https://git.0x484c.com/fabrizio">
						<a className="contact-button" target="_blank">
							<FaGitlab className="contact-icon" />
						</a>
					</Link>
					<Spacer />
					<Link href="https://www.linkedin.com/in/fabrizio-onorio/">
						<a className="contact-button" target="_blank">
							<FaLinkedin className="contact-icon" />
						</a>
					</Link>
				</Row>
				<Spacer />
			</section>
		</section>
	);
};
