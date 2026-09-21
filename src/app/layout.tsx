import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export const metadata: Metadata = {
  title: "StoryEpisodes | Read • Explore • Keep Coming Back",
  description: "Discover amazing stories, one episode at a time. Dive into captivating series, explore new genres, and never miss an episode.",
  keywords: ["stories", "episodes", "reading", "fiction", "novels", "web novel", "romance", "fantasy", "mystery"],
  authors: [{ name: "StoryEpisodes Team" }],
  openGraph: {
    title: "StoryEpisodes | Discover Amazing Stories",
    description: "Read the best serialized stories and episodes online.",
    url: "https://storyepisodes.com",
    siteName: "StoryEpisodes",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - var(--nav-height) - 300px)', paddingTop: 'var(--nav-height)' }}>
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
