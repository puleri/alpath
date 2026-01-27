import "./globals.css";
import { Anaheim } from "next/font/google";

const anaheim = Anaheim({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: {
    default: "Alpath Engineering",
    template: "%s | Alpath Engineering",
  },
  description:
    "Alpath Engineering delivers digital solutions that work as hard as your business, blending strategy, design, and engineering for ambitious teams.",
  metadataBase: new URL("https://alpath.engineering"),
  openGraph: {
    title: "Alpath Engineering",
    description:
      "Digital solutions working as hard as your business—partner with Alpath Engineering for strategy, design, and product engineering.",
    url: "/",
    siteName: "Alpath Engineering",
    type: "website",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Alpath Engineering brand mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpath Engineering",
    description:
      "Digital solutions working as hard as your business—partner with Alpath Engineering for strategy, design, and product engineering.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Alpath Engineering" />
      </head>
      <body className={anaheim.className}>{children}</body>
    </html>
  );
}
