import '@styles/globals.css';
import type { AppProps } from 'next/app';
import PageLoader from '@components/shared/custom/page-loader';
import { Toaster } from 'sonner';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <PageLoader />
            <Toaster position="bottom-right" />
            <Component {...pageProps} />
        </>
    );
}
