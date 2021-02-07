/** @format */
import Link from 'next/link';
import Story from './Story';
const StoryList = ({ stories }) => {
	return (
		<div className='story-list'>
			{/* {stories.map((story, index) => ( 
                 <Story key={index} story={story} />
                {/* ))} */}
			{stories.map((story) => (
				<div className='story' key={story.id}>
					<h2 className='story-title'>
						<a>{story.title}</a>
					</h2>
					<div className='story-details'>
						<span>{story.points || 0} points</span>
						<Link href={`/story?id=${story.id}`}>
							<a>{story.comments_count || 0} comments</a>
						</Link>
						{/* <span>{story.body}</span> */}
					</div>
				</div>
			))}
			<style jsx>{`
				.style-list {
					padding: 0 1em;
				}
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
};
export default StoryList;
