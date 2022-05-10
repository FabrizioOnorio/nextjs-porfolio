import React from "react";
import Link from "next/link";
import Image from "next/image";

export const GuessWho: React.FC = () => {
	return (
		<>
			<div>
				<h3>Guess Who</h3>
				<div>
					<div>
						<Link href="https://guess-who-salt-game.herokuapp.com/">
							<a target="_blank">
								<p>Visit the heroku page</p>
							</a>
						</Link>
						<p>
							This application is the implementation of the famous{" "}
							<Link href="https://en.wikipedia.org/wiki/Guess_Who%3F">
								<a target="_blank">Guess Who</a>
							</Link>{" "}
							game.
							<br />
							This is app is been made using React with Typescript and Redux for
							the front-end,
							<br />
							for the back-end we used Express together with a socket.io server
							for keeping the connection open between different clients
							<br />
						</p>
						<p>
							<Link href="https://github.com/FabrizioOnorio/guess-who">
								<a target="_blank">Code on GitHub for the main app</a>
							</Link>
						</p>
						<p>
							<Link href="https://github.com/FabrizioOnorio/guess-who-socket">
								<a target="_blank">Code on GitHub for the socket server</a>
							</Link>
						</p>
					</div>
				</div>
				<div>
					<Image
						src={"/guess-who.png"}
						alt={"prototype screenshots of the recipes project"}
						width={200}
						height={200}
					/>
				</div>
			</div>
		</>
	);
};
