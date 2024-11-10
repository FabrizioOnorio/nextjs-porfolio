import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

const RailsMarketPlacePage: NextPage = () => {
	return (
		<>
			<section className="project-page-section">
      <Nav />
				<h1>Market Place for Fabrics</h1>
				<section className="project-page-description">
					<Image
						objectFit="cover"
						width={350}
						height={350}
						src={"/fabrics.png"}
						alt={"prototype screenshots of a fabrics marketplace for a airbnb clone project"}
						className="project-page-img"
					/>
					<section className="project-page-text">
						<p>
							A Ruby on Rails Desktop-Web-App. This was our first team project
							in Le Wagon Coding Bootcamp.<br></br> The use of it is for selling recycled
							fabrics.
						</p>
						<section className="projects-page-links">
							<Link href="https://github.com/Sarowa158/fabrics_marketplace">
								<a target="_blank">Code on GitHub</a>
							</Link>
						</section>
					</section>
				</section>
			</section>
      <Footer />
		</>
	);
};

export default RailsMarketPlacePage;
