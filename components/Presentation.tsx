import React from "react";

export const Presentation: React.FC = () => {
	return (
		<section className="w-full h-screen flex flex-col items-center justify-center" id={"home"}>
			<section className="flex flex-col items-center w-full text-xl font-semibold">
				<div className="text-xl font-semibold">
					<h1 className="text-3xl"><span className="text-orange-700 text-6xl">Hello!</span> I&apos;m Fabrizio,</h1>
					<h3>a Full-Stack <span className="text-yellow-400">TypeScript</span> Developer</h3>
				</div>
			</section>
			<section className="w-full flex justify-center">
				<h4 className="text-lg mt-3 max-w-3/6 break-all ">
					I love using code, for making products that people love using.
				</h4>
			</section>
		</section>
	);
};
