import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fira_Code } from "next/font/google";

const firacode = Fira_Code({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={firacode.className}>
      <Component {...pageProps} />
    </main>
  );
}
