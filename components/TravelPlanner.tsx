import React from "react";
import Link from "next/link";
import Image from "next/image";

export const TravelPlanner: React.FC = () => {
	return (
		<>
			<div>
				<h3>travel planner</h3>

				<div>
					<div>
						<Link href="http://www.traveld.eu/">
							<a target="_blank">
								<p>Visit traveld.eu</p>
							</a>
						</Link>
						<p>
							A Ruby on rails Mobile-Web-App to plan your trip based on covid
							travel restrictions.
							<br />
							To retrieve real data we used 2
							<Link href="https://developers.amadeus.com/">
								<a target="_blank">&quot;Amadeus for Developers&quot;</a>
							</Link>
							APIs, one for checking the restrictions and one for getting the
							available flights.
						</p>

						<p>
							<Link href="https://github.com/FabrizioOnorio/travel_planner2">
								<a target="_blank">Code on GitHub</a>
							</Link>
						</p>
					</div>
				</div>

				<div>
					<Image
						src={"/travel_planner.jpeg"}
						alt={"prototype screenshots of the travel planner project"}
						width={200}
						height={200}
					/>
				</div>
			</div>
		</>
	);
};
