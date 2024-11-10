import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

const NpmDownloadsPage: NextPage = () => {
	return (
		<>
			<section className="project-page-section">
				<Nav />
				<h1>Npm Downloads</h1>
				<section className="project-page-description">
					<Image
						objectFit="cover"
						width={350}
						height={350}
						src={"/npmDownloads.png"}
						alt={"prototype screenshots of the npm downloads project"}
						className="project-page-img"
					/>
					<section className="project-page-text">
						<p>
							This is a full-stack Next.JS application. For the data
							visualisation I used Victory, wich is an  ecosystem of composable React components
							for building interactive data visualizations.
						</p>
						<section className="projects-page-links">
							<Link href="https://npm-download-count.vercel.app/">
								<a target="_blank">Visit the Vercel page</a>
							</Link>

							<Link href="https://github.com/FabrizioOnorio/npm-download-count">
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

export default NpmDownloadsPage;
