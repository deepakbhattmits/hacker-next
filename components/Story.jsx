/** @format */
import Link from 'next/link';
const Story = ({ story: { id, title, url, points, comments_count } }) => {
	console.log('STORY : ', id, title, url, points, comments_count);
	return (
		<div className='story'>
			<h2 className='story-title'>
				<a href={url}>{title}</a>
			</h2>
			<div className='story-details'>
				<span>{points || 0} points</span>
				<Link href={`/story?id=${id}`}>{comments_count || 0} comments</Link>
			</div>
			<style jsx>{`
				.story {
					padding: 1em 0;
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
				.story-title a:over {
					color: #444;
					text-decoration: initial;
				}
			`}</style>
		</div>
	);
};
export default Story;
