import styles from '../styles/globals.css';
import Head from 'next/head';

<Head>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300&display=swap" rel="stylesheet" />
</Head>

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}