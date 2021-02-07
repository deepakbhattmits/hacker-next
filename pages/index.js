/** @format */
import { useEffect } from 'react';
import Error from 'next/error';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import LoadingSpinner from '../components/LoadingSpinner';
const IndexPage = ({ stories, page }) => {
	useEffect(() => {
		// getStories();
	}, []);
	if (!!stories.length === 0) {
		return <Error statusCode={503} />;
	}
	// if (!!stories.message) {
	// 	return <Error statusCode={503} />;
	// }
	return (
		<Layout
			title='Hacker Next'
			description='A Hacker News clone made with Next.js'>
			{!!stories.message ? <LoadingSpinner /> : <StoryList stories={stories} />}
			{/*  */}

			<footer>
				<Link href={`/?page=${stories.message ? page : page + 1}`}>
					{stories.message ? <a>Load</a> : <a>Next page({page})</a>}
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
};
IndexPage.getInitialProps = async ({ req, res, query }) => {
	let stories;
	let page;
	try {
		page = +query.page || 1;
		const response = await fetch(
			`https://node-hnapi.herokuapp.com/news?page=${page}`
		);
		// const response = await fetch(
		// 	`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
		// );
		stories = await response.json();
	} catch (err) {
		console.log(err);
		stories = [];
	}
	return { page, stories };
};

export default IndexPage;
