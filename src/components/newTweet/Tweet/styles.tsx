import { Paper } from '@mui/material';
import { styled } from '@mui/styles';

export const TweetWrapper = styled(Paper)({
	borderLeft: 0,
	borderRight: 0,
	paddingTop: '15px',
	paddingLeft: '20px',
	transition: 'all .2s ease',
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: 'rgb(245, 248, 250)',
	},
});

export const TweetButtons = styled('footer')({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	maxWidth: '450px',
	width: '100%',
	'.MuiSvgIcon-root': {
		fontSize: '20px',
	},
	span: {
		fontSize: '14px',
	},
	marginTop: '10px',
});

export const TweetButtonWrapper = styled('div')(({ theme }) => ({
	transition: 'all 0.1s ease',
	'&:hover': {
		color: theme.palette.primary.main,
	},
}));

export const TweetButtonLabel = styled('span')({
	marginLeft: '5px',
});
