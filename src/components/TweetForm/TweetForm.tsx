import React from 'react';
import {
	SWrapper,
	SAvatar,
	STweetFormWrapper,
	STweetTextArea,
	SDivider,
	SActions,
	SButtonsWrapper,
	SButtonsDivider,
} from './TweetForm.styled';
import IconButton from '@mui/material/IconButton';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const MAX_LENGTH = 300;

const TweetForm: React.FC = (): React.ReactElement => {
	const [value, setValue] = React.useState('');

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.currentTarget.value);
	};

	const progress = (value.length / 300) * 100;

	return (
		<SWrapper>
			<SAvatar />
			<STweetFormWrapper>
				<STweetTextArea
					maxLength={MAX_LENGTH}
					value={value}
					onChange={handleChange}
					placeholder="What's happening?"
				/>
				<SDivider />

				<SActions>
					<div>
						<IconButton>
							<ImageIcon />
						</IconButton>

						<IconButton>
							<EmojiIcon />
						</IconButton>
					</div>

					<SButtonsWrapper>
						{!!progress && (
							<>
								<CircularProgress
									size={25}
									variant='determinate'
									value={progress}
									color={progress === 100 ? 'warning' : 'secondary'}
								/>
								<SButtonsDivider />
							</>
						)}

						<Button variant='contained' disabled={!value}>
							Tweet
						</Button>
					</SButtonsWrapper>
				</SActions>
			</STweetFormWrapper>
		</SWrapper>
	);
};

export default TweetForm;
