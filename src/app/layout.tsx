import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { MantineProvider } from "@mantine/core";
// import { DynamicTextDataProvider } from "@/utils/dynamicText";
import "./globals.scss";
import { ModalProvider } from "@/Components/Shared/Modal/Modal";
import { ToastContainer } from "react-toastify";
import type { Viewport } from "next";
import { MusicProvider } from "@/Components/Shared/Music/Music";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#899584",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "only light",
};

export const metadata: Metadata = {
  title: "Arin & Bagas",
  description:
    "Website undangan pernikahan Arin & Bagas. Mari bergabung dan berbagi kebahagiaan bersama kami!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflow: "hidden" }}>
      <head>
        <title>The Wedding of Arin & Bagas</title>
        <meta name="title" content="The Wedding of Arin & Bagas" />
        <meta
          name="description"
          content="We will be getting married on September 15th 2024. Join us in celebrating the happiest day of our life!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arindanbagas.ourjoy.id/" />
        <meta property="og:title" content="The Wedding of Arin & Bagas" />
        <meta
          property="og:description"
          content="We will be getting married on September 15th 2024. Join us in celebrating the happiest day of our life!"
        />
        <meta
          property="og:image"
          content="https://utfs.io/f/d9bd82e7-8ef0-4901-8c3a-84880157e4f7-3ss2nh.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://arindanbagas.ourjoy.id/"
        />
        <meta property="twitter:title" content="The Wedding of Arin & Bagas" />
        <meta
          property="twitter:description"
          content="We will be getting married on September 15th 2024. Join us in celebrating the happiest day of our life!"
        />
        <meta
          property="twitter:image"
          content="https://utfs.io/f/d9bd82e7-8ef0-4901-8c3a-84880157e4f7-3ss2nh.jpg"
        />
      </head>
      <body className={inter.className}>
        <div
          id="topMostContainer"
          style={{ overflow: "hidden", height: "100dvh" }}
        >
          {/* <MantineProvider> */}
          {/* <DynamicTextDataProvider> */}
          <MusicProvider>
            <ModalProvider>{children}</ModalProvider>
          </MusicProvider>
          {/* </DynamicTextDataProvider> */}
          {/* </MantineProvider> */}
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
