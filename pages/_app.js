import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Main from "../components/layout/Main";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Main>
        <DefaultSeo {...SEO} />
        <ThemeProvider attribute="data-theme">
          <Component {...pageProps} />
        </ThemeProvider>
      </Main>
    </>
  );
}
