import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import { Row, Spacer } from "@nextui-org/react";

export const Contacts: React.FC = () => {
	return (
		<section className="contacts-section" id={"contacts"}>
			<section className="contacts-section--text">
				<Spacer />
				<Row justify="center" align="center">
					<h2 className="text-xl font-semibold">Get In Touch</h2>
				</Row>
				<Spacer y={2} />
				<Row justify="center" align="center">
					<Link href="https://github.com/FabrizioOnorio/">
						<a className="contacts" target="_blank">
							<FaGithubSquare />
						</a>
					</Link>
					<Spacer />
					<Link href="https://www.linkedin.com/in/fabrizio-onorio/">
						<a className="contacts" target="_blank">
							<BsLinkedin />
						</a>
					</Link>
					<Spacer />
					<a className="contacts" href="mailto:onoriofabrizio@gmail.com">
						<FiMail />
					</a>
				</Row>
				<Spacer />
			</section>
		</section>
	);
};
