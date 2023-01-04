import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Main from "../components/layout/Main";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Main>
        <DefaultSeo {...SEO} />
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
      </Main>
    </>
  );
}
