import "./globals.css";

export const metadata = {
  title: "Alpath",
  description: "Next.js app initialized for Alpath.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
