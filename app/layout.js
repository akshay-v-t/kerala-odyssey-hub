import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({

   subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',

})

export const metadata = {
  title: "Kerala Odyssey Hub",
  description: "Explore the best tour packages in Kerala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased max-w-[1360px] mx-auto px-4`}
      >
        {children}
      </body>
    </html>
  );
}
