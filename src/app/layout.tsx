import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
// import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProvider } from "./providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Notenza",
  description: "Automate your workflow effortlessly with Notenza.",
  icons: "/favicon.icos"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
