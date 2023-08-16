import React from "react";

export const Presentation: React.FC = () => {
	return (
		<section className="w-full h-screen flex flex-col items-center justify-center" id={"home"}>
				<div className="text-xl font-semibold flex flex-col items-center justify-center">
					<h1 className="text-3xl">Hello! I&apos;m Fabrizio,</h1>
					<h3>a Full-Stack <span className="text-yellow-400">TypeScript</span> Developer</h3>
				</div>
		</section>
	);
};
