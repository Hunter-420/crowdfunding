import { Poppins } from "next/font/google";

import Layout from "@/Components/Layout/Layout";
import StyledComponentsRegistry from "@/lib/registry";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "DreamFund: Blockchain-Powered Crowdfunding for Your Dreams",
  description:
    "DreamFund is a blockchain-based crowdfunding platform, ensuring secure, transparent, and fair project funding. Join us to support and realize innovative dreams worldwide.",
};
export const revalidate = 3600; // revalidate at most every hour

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
