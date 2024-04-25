import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Nav from "components/navbar/Navbar.component";
import Footer from "components/footer/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Premiun Representaciones y Logistica",
  description:
    "Landing page de la empresa Premiun Representaciones y Logistica creada por Gamaliel Camey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="min-w-full mb-2 lg:mb-10 overflow-x-hidden flex items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
