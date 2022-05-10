import React from "react";
import Link from "next/link";
import Image from "next/image";

export const MarketPlace: React.FC = () => {
	return (
		<>
			<div>
				<h3>market place for fabrics</h3>

				<div>
					<div>
						<Link href="https://airbnb-sarowa158.herokuapp.com">
							<a target="_blank">
								<p>Visit the heroku page</p>
							</a>
						</Link>
						<p>
							A Ruby on Rails Desktop-Web-App. This was our first team project
							in Le Wagon Coding Bootcamp.
							<br />
							The meaning is to sell fabrics that otherwise would go wasted.
						</p>
						<p>
							<Link href="https://github.com/Sarowa158/fabrics_marketplace">
								<a target="_blank">Code on GitHub</a>
							</Link>
						</p>
					</div>
				</div>
				<div>
					<Image
						src={"/fabrics.png"}
						alt={"prototype screenshots of the fabrics airbnb clone project"}
						width={200}
						height={200}
					/>
				</div>
			</div>
		</>
	);
};
