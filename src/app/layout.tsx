import {Inter} from "next/font/google";
import "./globals.css";
import Nav from "components/navbar/Navbar.component";
import Footer from "components/footer/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "PREMIUN S.A. – Logística y Representación",
  description:
    "PREMIUN es un Centro Integral de Distribución ubicado en Córdoba Capital, con cobertura en toda la provincia.",
  openGraph: {
    title: "PREMIUN S.A. – Logística y Representación",
    description:
      "Centro Integral de Distribución y Logística en Córdoba Capital.",
    url: "https://premiunsa.com",
    siteName: "PREMIUN S.A.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es",
    type: "website",
  },
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
