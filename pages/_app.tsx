import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import LogRocket from 'logrocket';

if (typeof window !== 'undefined') {
  LogRocket.init('eoiwnx/plyometrics');
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
