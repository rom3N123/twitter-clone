import React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../assets/icons/navigation/home.svg';
import { ReactComponent as ExploreIcon } from '../../assets/icons/navigation/explore.svg';
import { ReactComponent as NotificationIcon } from '../../assets/icons/navigation/notifications.svg';
import { ReactComponent as MessageIcon } from '../../assets/icons/navigation/messages.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/icons/navigation/bookmark.svg';
import { ReactComponent as ListsIcon } from '../../assets/icons/navigation/lists.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icons/navigation/profile.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/navigation/mode.svg';
import { SListItem, SListItemButton, SListItemText, SNavLink } from './Navigation.styled';

interface INavigationItem {
	to: string;
	label: string;
	icon: React.ReactNode;
}

const navigationItems: INavigationItem[] = [
	{ to: '/', icon: <HomeIcon />, label: 'Home' },
	{ to: '/explore', icon: <ExploreIcon />, label: 'Explore' },
	{ to: '/notifications', icon: <NotificationIcon />, label: 'Notifications' },
	{ to: '/messages', icon: <MessageIcon />, label: 'Messages' },
	{ to: '/bookmarks', icon: <BookmarkIcon />, label: 'Bookmarks' },
	{ to: '/lists', icon: <ListsIcon />, label: 'Lists' },
	{ to: '/profile', icon: <ProfileIcon />, label: 'Profile' },
	{ to: '/more', icon: <MoreIcon />, label: 'More' },
];

const Navigation = () => {
	return (
		<Grid container direction='column'>
			<List>
				<Link style={{ marginLeft: '12px' }} to='/'>
					<IconButton>
						<TwitterIcon sx={{ fontSize: '40px' }} />
					</IconButton>
				</Link>

				{navigationItems.map((navigationItem) => (
					<SListItem>
						<SNavLink to={navigationItem.to}>
							<SListItemButton>
								<ListItemIcon>{navigationItem.icon}</ListItemIcon>
								<SListItemText>{navigationItem.label}</SListItemText>
							</SListItemButton>
						</SNavLink>
					</SListItem>
				))}
			</List>
		</Grid>
	);
};

export default Navigation;
