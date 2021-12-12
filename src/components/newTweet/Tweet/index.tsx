import React from 'react';
import { Box } from '@mui/system';
import { Avatar, Grid, IconButton, Typography } from '@mui/material';

import MoreIcon from '@mui/icons-material/MoreHoriz';
import ChatIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadIcon from '@mui/icons-material/FileUploadOutlined';

import { TweetButtonLabel, TweetButtons, TweetButtonWrapper, TweetWrapper } from './styles';

interface TweetProps {
	user: {
		nickname: string;
		name: string;
		avatarUrl: string;
	};
	text: string;
	createdAt: number;
	activity: {
		comments: any[];
		likes: any[];
		retweets: any[];
	};
}

const Tweet: React.FC<TweetProps> = ({ user, text, createdAt, activity }): React.ReactElement => {
	return (
		<TweetWrapper variant='outlined'>
			{/* Аватар пользователя */}
			<Grid container gap='12px'>
				<Grid item>
					<Avatar
						sx={{ width: '48px', height: '48px' }}
						src={user.avatarUrl}
						alt={`Аватарка пользователя ${user.name}`}
					/>
				</Grid>
				{/* Тело твита */}
				<Grid item flex='1'>
					{/* Имя пользователя */}
					<div>
						<Typography variant='body1' sx={{ fontWeight: 600 }}>
							{user.name}{' '}
							<Typography sx={{ color: '#667581' }} variant='body2' component='span'>
								@{user.nickname}
							</Typography>
							{' · '}
							<Typography sx={{ color: '#667581' }} variant='body2' component='span'>
								{createdAt}
							</Typography>
						</Typography>
					</div>

					{/* Текст твита */}
					<Typography variant='body2'>{text}</Typography>

					<TweetButtons>
						<TweetButtonWrapper>
							<IconButton color='inherit'>
								<ChatIcon />
							</IconButton>
							{!!activity.comments.length && (
								<TweetButtonLabel>{activity.comments.length}</TweetButtonLabel>
							)}
						</TweetButtonWrapper>
						<Box
							sx={{
								'&:hover': {
									color: 'success.light',
								},
							}}>
							<IconButton color='inherit'>
								<ShareIcon />
							</IconButton>
							{!!activity.retweets.length && (
								<TweetButtonLabel>{activity.retweets.length}</TweetButtonLabel>
							)}
						</Box>
						<Box
							sx={{
								'&:hover': {
									color: 'error.light',
								},
							}}>
							<IconButton color='inherit'>
								<FavoriteIcon />
							</IconButton>
							{!!activity.likes.length && (
								<TweetButtonLabel>{activity.likes.length}</TweetButtonLabel>
							)}
						</Box>
						<TweetButtonWrapper>
							<IconButton color='inherit'>
								<FileUploadIcon />
							</IconButton>
						</TweetButtonWrapper>
					</TweetButtons>
				</Grid>

				{/* Кнопка "..." */}
				<Grid item>
					<IconButton>
						<MoreIcon />
					</IconButton>
				</Grid>
			</Grid>
		</TweetWrapper>
	);
};

export default Tweet;
