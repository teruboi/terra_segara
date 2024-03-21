import { Signika } from "next/font/google";
import "./globals.css";
import Image from "next/image"; 
import Link from "next/link";
import Navbar from "@/components/Navbar"
import ButtonDefault from "@/components/Button";
import Footer from "@/components/Footer";

const signika = Signika({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-signika'
})

export const metadata = {
  title: "Terra Segara",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${signika.className} max-w-[1920px] w-full block mx-auto bg-gradient-to-b from-white to-white overflow-x-hidden`}>
          <header>
            <Navbar />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
          <link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"></link>
          <script>
            new Glide('.glide').mount()
          </script>
      </body>
    </html>
  );
}
