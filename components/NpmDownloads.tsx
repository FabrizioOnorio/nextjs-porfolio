import React from "react";
import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";
import Image from "next/image";

export const NpmDownloads: React.FC = () => {
	return (
		<article className="project-card">
			<Image
				objectFit="cover"
				width={200}
				height={200}
				src={"/npmDownloads.png"}
				alt={"prototype screenshots of the recipes project"}
				className="project-card-img"
			/>
			<div className="project-card-text">
				<h3>Npm Downloads</h3>
				<section className="project-card--links">
					<Link href="/npm-downloads">
						<a className="readMore">
							Read more <BsFillArrowRightCircleFill />
						</a>
					</Link>
					<Link href="https://npm-download-count.vercel.app/">
						<a target="_blank">
							<BiWorld /> Visit the web page
						</a>
					</Link>

					<Link href="https://github.com/FabrizioOnorio/npm-download-count">
						<a target="_blank">
							<BsGithub /> GitHub
						</a>
					</Link>
				</section>
			</div>
		</article>
	);
};
