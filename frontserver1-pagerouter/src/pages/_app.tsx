import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <h2>글로벌헤더</h2>
    <Component {...pageProps} />
  </>
  );
}