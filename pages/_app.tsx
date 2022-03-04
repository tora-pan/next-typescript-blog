import "../styles/index.css";
import Header from "../components/Header";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
