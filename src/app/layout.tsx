import "@/ui/tailwind.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/ui/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "QuillCircle",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
