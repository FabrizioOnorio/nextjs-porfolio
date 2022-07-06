import React from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill, BsGithub } from "react-icons/bs";

export const MarketPlace: React.FC = () => {
	return (
		<article className="project-card">
			<h3>Rails Market Place</h3>
			<section className="project-card--links">
				<Link href="/rails-marketplace" scroll>
					<a className="readMore">
						Read more <BsFillArrowRightCircleFill />
					</a>
				</Link>
				<Link href="https://github.com/Sarowa158/fabrics_marketplace">
					<a target="_blank">
						<BsGithub /> GitHub
					</a>
				</Link>
			</section>
		</article>
	);
};
