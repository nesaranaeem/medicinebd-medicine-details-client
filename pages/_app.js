import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Main from "../components/layout/Main";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "../contexts/AuthProvider/AuthProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <NextNProgress />
        <Main>
          <DefaultSeo {...SEO} />
          <Toaster position="top-center" reverseOrder={false} />
          <Component {...pageProps} />
        </Main>
      </AuthProvider>
    </>
  );
}
