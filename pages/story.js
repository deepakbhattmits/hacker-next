/** @format */
import Error from 'next/error';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import CommentList from '../components/CommentList';

const Story = ({
	story: { title, url, points, comments_count, time_ago, comments },
	story,
}) => {
	const router = useRouter();
	const id = router.query.id;
	// if (!!story.message) {
	// 	return <Error statusCode={503} />;
	// }
	return (
		<Layout title={title} backButton={true}>
			{!!story.message ? (
				<Error statusCode={503} />
			) : (
				<main>
					<div className='story'>
						<h2 className='story-title'>
							<a href={url}>{title}</a>
						</h2>
						<div className='story-details'>
							<strong>{points || 0} points</strong>
							<strong>{comments_count || 0} comments</strong>
							<strong>{time_ago}</strong>
						</div>
						{comments.length > 0 ? (
							<CommentList comments={story.comments} />
						) : (
							<div>No comments for this story</div>
						)}
					</div>
				</main>
			)}
			<footer>
				{!!!title ? (
					<span
						onClick={() => {
							router.push({
								query: { id },
							});
						}}>
						Click here to load
					</span>
				) : (
					<span
						onClick={() => {
							router.back();
						}}>
						Go Back
					</span>
				)}
			</footer>

			<style jsx>{`
				.story {
					padding: 1em;
				}
				.story-title {
					font-size: 1.2rem;
					font-weight: 300;
					padding-bottom: 0.5em;
				}
				.story-title a {
					color: #333;
					text-decoration: none;
				}
				.story-title a:hover,
				.story-details a:hover {
					color: #444;
					text-decoration: initial;
				}
				.story-details {
					font-size: 0.8rem;
					font-weight: bold;
					padding-bottom: 1em;
					border-bottom: 1 solid rgba(0, 0, 0, 0.1);
					margin-bottom: 1em;
				}
				.story-details strong {
					margin-right: 1em;
				}
				.story-details a {
					color: #f60;
				}
				footer {
					padding: 1em;
					position: sticky;
					bottom: 0;
					background: #f60;
				}
				footer span {
					font-weight: bold;
					color: black;
					cursor: pointer;
				}
			`}</style>
		</Layout>
	);
};
Story.getInitialProps = async ({ req, res, query }) => {
	let id = query.id;
	let story;
	try {
		const response = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`);
		story = await response.json();
	} catch (err) {
		console.log('error: ', err);
		story = null;
	}
	return {
		story,
	};
};
export default Story;
