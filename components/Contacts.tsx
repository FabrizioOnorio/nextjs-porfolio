import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGitSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

export const Contacts: React.FC = () => {
	return (
		<>
			<h2>Get in Touch</h2>
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
