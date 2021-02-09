/** @format */
import Link from 'next/link';
const Story = ({ story: { id, title, url, points, comments_count } }) => (
	<div className='story'>
		<h2 className='story-title'>
			<a href={url}>{title}</a>
		</h2>
		<div className='story-details'>
			<span>{points || 0} points</span>
			<Link href={`/story?id=${id}`}>
				<a>{comments_count || 0} comments</a>
			</Link>
		</div>
		<style jsx>{`
			.story {
				padding: 1em;
			}
			.story-title {
				font-size: 1rem;
				font-weight: 400;
				margin: 0 0 0.5em 0;
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
			}
			.story-details span {
				margin-right: 1em;
			}
			.story-details a {
				color: #6600ff;
				text-decoration: none;
			}
		`}</style>
	</div>
);
export default Story;
