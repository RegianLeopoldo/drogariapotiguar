import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://drogariapotiguar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Drogaria Potiguar | Farmácia no Recanto das Emas - DF",
    template: "%s | Drogaria Potiguar",
  },

  description:
    "Conheça a Drogaria Potiguar, localizada no Recanto das Emas, Brasília - DF. Confira informações da loja, horários de funcionamento, localização e atendimento.",

  applicationName: "Drogaria Potiguar",

  keywords: [
    "Drogaria Potiguar",
    "farmácia no Recanto das Emas",
    "drogaria no Recanto das Emas",
    "farmácia em Brasília DF",
    "drogaria em Brasília",
    "farmácia perto de mim",
  ],

  authors: [{ name: "Drogaria Potiguar" }],
  creator: "Drogaria Potiguar",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Drogaria Potiguar",
    title: "Drogaria Potiguar | Recanto das Emas - DF",
    description:
      "Confira informações da Drogaria Potiguar, localização, horários de funcionamento e atendimento no Recanto das Emas.",
    images: [
      {
        url: "/images/og-drogaria-potiguar.jpg",
        width: 1200,
        height: 630,
        alt: "Fachada da Drogaria Potiguar no Recanto das Emas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Drogaria Potiguar | Recanto das Emas - DF",
    description:
      "Conheça a Drogaria Potiguar. Confira localização, horários e informações da loja.",
    images: ["/images/og-drogaria-potiguar.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
