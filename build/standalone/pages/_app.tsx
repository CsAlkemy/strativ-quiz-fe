import '@styles/globals.css';
import type { AppProps } from 'next/app';
import PageLoader from '@components/shared/custom/page-loader';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <PageLoader />
            <Component {...pageProps} />
        </>
    );
}
