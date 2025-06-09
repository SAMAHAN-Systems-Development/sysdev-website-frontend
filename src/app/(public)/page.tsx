import Head from "next/head";
import type { Metadata } from "next";
import HomeWhoWeAre from "@/components/sections/HomeWhoWeAre";
export const metadata: Metadata = {
  title: "SAMAHAN Systems Development",
  description: "The official website of SAMAHAN Systems Development",
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico?v=M44lzPylqQ" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg?v=M44lzPylqQ"
          color="#000000"
        ></link>
      </Head>
      <main>
        <HomeWhoWeAre />
      </main>
    </>
  );
}
