/** @format */

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class myDoc extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='manifest' href='manifest.json' />

					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='application-name' content='hacker-next' />
					<meta name='apple-mobile-web-app-title' content='hacker-next' />
					<meta name='theme-color' content='#ff6600' />
					<meta name='msapplication-navbutton-color' content='#ff6600' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='black-translucent'
					/>
					<meta name='msapplication-starturl' content='/' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
