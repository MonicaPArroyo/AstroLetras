import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "@/app/globals.css";
import Hydration from "@/app/hydration";
import { Providers } from "@/app/providers";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "AstroLetras",
	description:
		"Explora el cosmos de la lectura, donde cada libro es una estrella",
	creator: "Mónica P. Arroyo",
	keywords: ["Next.js", "React", "JavaScript"],
	openGraph: {
		title: "AstroLetras",
		description:
			"Explora el cosmos de la lectura, donde cada libro es una estrella",
		url: "https://astroletras.vercel.app/",
		siteName: "AstroLetras",
		images: [
			{
				url: "https://ucarecdn.com/2adada56-d0eb-4ff9-8fc0-bf1036664432/-/preview/1000x479/",
			},
		],
		locale: "es_MX",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark'>
			<body
				className={`${montserrat.className} bg-gradient-to-br from-secondary-50 from-60%  to-secondary-400 to-100%`}
			>
				<Hydration />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
