/** @format */

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='152x152'
					href='/images/icon-152x152.png'
				/>
				<link
					rel='apple-touch-icon'
					type='image/png'
					sizes='152x152'
					href='/images/icon-152x152.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='/images/icon-192x192.png'
				/>
				<link
					rel='apple-touch-icon'
					type='image/png'
					sizes='192x192'
					href='/images/icon-192x192.png'
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
