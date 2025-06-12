import "@/styles/globals.css";
import { instrument_sans, inter } from "@/styles/font";
import NavigationBar from "@/components/ui/NavigationBar";
import Footer from "@/components/ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico?v=M44lzPylqQ" sizes="any" />
        <link
          rel="mask-icon"
          href="{{ base_path }}/images/safari-pinned-tab.svg?v=M44lzPylqQ"
          color="#000000"
        ></link>
        <meta property="og:image" content="/images/SysDevLogo.png"></meta>
      </head>
      <body
        className={`${inter.variable} ${instrument_sans.variable} antialiased`}
      >
        <NavigationBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
