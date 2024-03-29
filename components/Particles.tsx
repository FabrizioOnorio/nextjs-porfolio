import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Background: React.FC = () => {
	const particlesInit = async (main: any) => {
		await loadFull(main);
	};
	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			options={{
				fpsLimit: 30,
				interactivity: {
					events: {
						onHover: {
							enable: true,
							mode: "repulse",
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: "#ffffff",
					},
					links: {
						color: "#ffffff",
						distance: 150,
						enable: true,
						opacity: 0.1,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 2,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 900,
						},
						value: 80,
					},
					opacity: {
						value: 0.1,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 4 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};
