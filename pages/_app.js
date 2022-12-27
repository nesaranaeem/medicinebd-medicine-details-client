import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Main from "../components/layout/Main";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Main>
        <DefaultSeo {...SEO} />

        <Component {...pageProps} />
      </Main>
    </>
  );
}
