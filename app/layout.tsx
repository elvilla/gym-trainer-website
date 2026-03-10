import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

export const metadata = {
  title: "Marcelo Personal Trainer | Entrenamiento en Buenos Aires",
  description: "Entrenamiento personalizado, fuerza y técnica de natación en Buenos Aires. Planes adaptados a tu objetivo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="overflow-y-scroll overflow-x-clip" suppressHydrationWarning>
      <body
        className={`${roboto.className} min-h-screen overflow-x-clip bg-slate-950 text-slate-100 antialiased text-[17px] sm:text-[18px]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}