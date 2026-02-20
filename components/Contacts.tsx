import React from "react";
import { FaGithubSquare, FaLinkedin, FaGitlab } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

export const Contacts: React.FC = () => {
	return (
		<section className="contacts-section" id="contact">
			<section className="contacts-section--text">
				<div className="text-center">
					<h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>
				</div>
				<div className="contact-buttons-grid">
					<Link href="https://github.com/FabrizioOnorio/">
						<a className="contact-button" target="_blank">
							<FaGithubSquare className="contact-icon" />
						</a>
					</Link>
					<Link href="https://git.0x484c.com/fabrizio">
						<a className="contact-button" target="_blank">
							<FaGitlab className="contact-icon" />
						</a>
					</Link>
					<Link href="https://www.linkedin.com/in/fabrizio-onorio/">
						<a className="contact-button" target="_blank">
							<FaLinkedin className="contact-icon" />
						</a>
					</Link>
					<a className="contact-button" href="mailto:onoriofabrizio@gmail.com">
						<FiMail className="contact-icon" />
					</a>
				</div>
			</section>
		</section>
	);
};
