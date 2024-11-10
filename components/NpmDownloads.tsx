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
				height={140}
				src={"/npmDownloads.png"}
				alt={"prototype screenshots of the recipes project"}
				className="project-card-img"
			/>
			<div className="project-card-text">
				<h3>Npm Downloads</h3>
				<section className="project-card--links">
					<Link href="/npm-downloads">
						<a className="card-link">
							Read more <BsFillArrowRightCircleFill />
						</a>
					</Link>
					<Link href="https://npm-download-count.vercel.app/">
						<a target="_blank" className="card-link">
							Visit the page <BiWorld />
						</a>
					</Link>

					<Link href="https://github.com/FabrizioOnorio/npm-download-count">
						<a target="_blank" className="card-link">
							GitHub <BsGithub />
						</a>
					</Link>
				</section>
			</div>
		</article>
	);
};
