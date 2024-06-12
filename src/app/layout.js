import { Inter } from "next/font/google";
import Layout from "@/Components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DreamFund: Blockchain-Powered Crowdfunding for Your Dreams",
  description:
    "DreamFund is a blockchain-based crowdfunding platform, ensuring secure, transparent, and fair project funding. Join us to support and realize innovative dreams worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
