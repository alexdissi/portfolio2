import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexandre Dissi",
  description: "Portfolio d'Alexandre Dissi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-[100vh]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="h-[10vh] w-[100vw]  border-b-2 border-slate-950 dark:border-slate-200">
            <NavBar />
          </header>
          <main className="h-[80vh] flex items-center justify-center">
            {children}
          </main>

          <footer className="h-[10vh] border-t-2 border-slate-950 dark:border-slate-200">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
