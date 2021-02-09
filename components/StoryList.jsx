/** @format */
import Link from 'next/link';
import Story from './Story';
const StoryList = ({ stories }) => {
	return (
		<div className='story-list'>
			{stories.map((story, index) => (
				<Story key={index} story={story} />
			))}

			<style jsx>{`
				.style-list {
					padding: 0 1em;
				}
			`}</style>
		</div>
	);
};
export default StoryList;
