import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { LocationProvider } from "@/components/LocationContext";
import ScrollToTop from "@/components/ScrollToTop";
import CurrencyProvider from "@/context/CurrencyContext";

export default function App({ Component, pageProps }) {
  return (
    <CurrencyProvider>
      <LocationProvider>
        <Layout>
          <ScrollToTop />
          <Component {...pageProps} />
        </Layout>
      </LocationProvider>
    </CurrencyProvider>
  );
}
