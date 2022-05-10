import React from "react";
import Image from "next/image";


export const Presentation: React.FC = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				gap: 20,
			}}
		>
			<Image
				src={"/avatar-image.jpg"}
				alt={"Profile Image of Fabrizio"}
				width={400}
				height={400}
			/>
			<p>
				Hello, I&apos;m Fabrizio!
				<br /> I&apos;m a passionate Full-Stack JavaScript Developer 🚀
				<br />
				Check out my projects down below ⬇️
			</p>
		</div>
	);
};
