import "./globals.css";
import { Anaheim } from "next/font/google";

const anaheim = Anaheim({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Alpath",
  description: "Next.js app initialized for Alpath.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anaheim.className}>{children}</body>
    </html>
  );
}
