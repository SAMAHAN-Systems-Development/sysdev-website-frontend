import Head from "next/head";
import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { withBasePath } from "@/lib/utils";
export const metadata: Metadata = {
	title: "SAMAHAN Systems Development",
	description: "The official website of SAMAHAN Systems Development",
};

export default function Home() {
	return (
		<>
			<Head>
				<link
					rel="shortcut icon"
					href={withBasePath("/images/favicon.ico?v=M44lzPylqQ")}
				/>
				<link
					rel="apple-touch-icon"
					href={withBasePath("/images/apple-touch-icon.png")}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={withBasePath("/images/favicon-32x32.png")}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={withBasePath("/images/favicon-16x16.png")}
				/>
				<link
					rel="mask-icon"
					href={withBasePath("/images/safari-pinned-tab.svg?v=M44lzPylqQ")}
					color="#000000"></link>
			</Head>
			<main>
				<HomePage />
			</main>
		</>
	);
}
