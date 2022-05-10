import React from "react";
import Link from "next/link";
import Image from "next/image";

export const GameOfLife: React.FC = () => {
	return (
		<>
			<div>
				<h3>conway&apos;s game of life</h3>
				<div></div>
				<div>
					<div>
						<Link href="https://game-of-life-on-react-fabrizioonorio.vercel.app/">
							<a target="_blank">
								<p>Visit the Vercel page for the React App</p>
							</a>
						</Link>
						<Link href="https://game-of-life-fab.herokuapp.com/">
							<a target="_blank">
								<p>Visit the Heroku page for the Rails App</p>
							</a>
						</Link>
						<p>
							This is the implementation of the famous Conway&apos;s game of
							life.
							<br />I made this Game both on React and on Rails
						</p>
						<p>
							<Link href="https://github.com/FabrizioOnorio/game_of_life_on_react">
								<a target="_blank">Code on GitHub (React App)</a>
							</Link>
						</p>
						<p>
							<Link href="https://github.com/FabrizioOnorio/game-of-life">
								<a target="_blank">Code on GitHub (Rails App)</a>
							</Link>
						</p>
					</div>
				</div>
				<div>
					<Image
						src={"/game-of-life-picture.png"}
						alt={"prototype screenshots of the game of life project"}
						width={200}
						height={200}
					/>
				</div>
			</div>
		</>
	);
};
