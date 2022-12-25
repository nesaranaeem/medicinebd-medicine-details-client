import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Main from "../components/layout/Main";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Main>
        <DefaultSeo {...SEO} />
        <ThemeProvider attribute="data-theme">
          <Component {...pageProps} />
        </ThemeProvider>
      </Main>
    </>
  );
}
