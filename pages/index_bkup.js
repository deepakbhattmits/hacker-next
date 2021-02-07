/** @format */
import { Component } from 'react';
import Error from 'next/error';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

class IndexPage extends Component {
	static async getInitialProps({ req, res, query }) {
		let stories;
		let page, limit;
		try {
			page = +query.page || 1;
			// const response = await fetch(
			// 	`https://node-hnapi.herokuapp.com/news?page=${page}`
			// );
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
			);
			stories = await response.json();
		} catch (err) {
			console.log(err);
			stories = [];
		}

		return { page, stories };
	}

	// componentDidMount() {
	// 	if ('serviceWorker' in navigator) {
	// 		navigator.serviceWorker
	// 			.register('/service-worker.js')
	// 			.then((registration) => {
	// 				console.log('service worker registration successful', registration);
	// 			})
	// 			.catch((err) => {
	// 				console.warn('service worker registration failed', err.message);
	// 			});
	// 	}
	// }

	render() {
		const { stories, page } = this.props;
		// console.log('indexPage : ', stories);
		if (stories.length === 0) {
			return <Error statusCode={503} />;
		}

		return (
			<Layout
				title='Hacker Next'
				description='A Hacker News clone made with Next.js'>
				<StoryList stories={stories} />

				<footer>
					<Link href={`/?page=${page + 1}`}>
						<a>Next Page ({page + 1})</a>
					</Link>
				</footer>

				<style jsx>{`
					footer {
						padding: 1em;
					}
					footer a {
						font-weight: bold;
						color: black;
						text-decoration: none;
					}
				`}</style>
			</Layout>
		);
	}
}

export default IndexPage;
