import { Link, Image } from '@nextui-org/react';
import React from 'react';

const GitHubLink = () => {
	return (
		<Link href="https://github.com/MakShuk/next-short-news">
			<Image alt="git" src="github.svg" width={28} height={28} className="dark:invert" />
		</Link>
	);
};

export default GitHubLink;
