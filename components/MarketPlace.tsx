import React from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";
import Image from "next/image";

export const MarketPlace: React.FC = () => {
	return (
		<article className="project-card">
			<Image
				objectFit="cover"
				width={200}
				height={140}
				src={"/fabrics.png"}
				alt={"prototype screenshots of the fabrics airbnb clone project"}
				className="project-card-img"
			/>
			<div className="project-card-text">
				<h3>Rails Market Place</h3>
				<section className="project-card--links">
					<Link href="/rails-marketplace">
						<a className="card-link">
							Read more <BsFillArrowRightCircleFill />
						</a>
					</Link>
					<Link href="https://github.com/Sarowa158/fabrics_marketplace">
						<a target="_blank" className="card-link">
							GitHub <BsGithub />
						</a>
					</Link>
				</section>
			</div>
		</article>
	);
};
