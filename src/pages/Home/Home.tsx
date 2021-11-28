import React from 'react';
import { TweetForm, PageHeader } from '../../components';
import { STweetFormWrapper } from './Home.styled';

const Home: React.FC = (): React.ReactElement => {
	return (
		<div>
			<PageHeader title='Home' />
			<STweetFormWrapper>
				<TweetForm />
			</STweetFormWrapper>
		</div>
	);
};

export default Home;
