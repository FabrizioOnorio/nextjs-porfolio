import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGitSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import {
	Container,
	Card,
	Row,
	Text,
	Spacer,
	Grid,
	Collapse,
} from "@nextui-org/react";

export const Contacts: React.FC = () => {
	return (
		<>
			<Row justify="center" align="center">
				<Text h2>Get In Touch</Text>
			</Row>
			<section>
				<Link href="https://www.linkedin.com/in/fabrizio-onorio/">
					<a target="_blank">
						<BsLinkedin />
					</a>
				</Link>
				<Link href="https://github.com/FabrizioOnorio/">
					<a target="_blank">
						<FaGitSquare />
					</a>
				</Link>
				<a href="mailto:onoriofabrizio@gmail.com">
					<FiMail />
				</a>
			</section>
		</>
	);
};
