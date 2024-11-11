import React from "react";
import Image from "next/image";

export const Presentation: React.FC = () => {
	return (
		<section className="w-full h-screen flex flex-col items-center justify-center" id="home">
				<div className="font-semibold flex flex-col items-center justify-center px-2">
				<Image
					objectFit="cover"
					width={300}
					height={300}
					src={"/avatar-profile.png"}
					alt={"avatar photo of Fabrizio"}
				/>
					<h1 className="text-3xl mt-10">Hello! I&apos;m Fabrizio,</h1>
					<h3>a Full-Stack <span className="text-[#66b4b7]">TypeScript</span> Developer</h3>
				</div>
		</section>
	);
};
