import "../styles/index.css";
import Header from "../components/Header";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-400 min-h-screen">
      <Header />
      <main className="">
        <Component {...pageProps} cla/>
      </main>
    </div>
  );
}

export default MyApp;
