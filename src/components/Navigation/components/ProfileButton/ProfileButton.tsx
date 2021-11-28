import React from 'react';
import Popover from '@mui/material/Popover';
import ButtonBase from '@mui/material/ButtonBase';
import {
	SWrapper,
	SAvatar,
	STextWrapper,
	SProfileName,
	SProfileId,
	SMoreIcon,
	SCheckIcon,
} from './ProfileButton.styled';
import { Divider, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const getProfileIdText = (id: string): string => {
	return id.length <= 13 ? id : id.split('').splice(0, 13).concat(['...']).join('');
};

const ProfileButton = () => {
	const [anchor, setAnchor] = React.useState<HTMLButtonElement | null>(null);

	const handleOpenPopover = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchor(e.currentTarget);
	};

	const handleClosePopover = () => {
		setAnchor(null);
	};

	return (
		<>
			<SWrapper component={ButtonBase} onClick={handleOpenPopover}>
				<SAvatar />
				<STextWrapper>
					<SProfileName>romen</SProfileName>
					<SProfileId>@{getProfileIdText('uAa0KZ3MeJDFBaf')}</SProfileId>
				</STextWrapper>
				<SMoreIcon />
			</SWrapper>

			<Popover
				anchorEl={anchor}
				open={Boolean(anchor)}
				onClose={handleClosePopover}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}>
				<SWrapper>
					<Grid item>
						<Grid alignItems='center' gap={'12px'} container>
							<SAvatar />
							<STextWrapper>
								<SProfileName>romen</SProfileName>
								<SProfileId>@{getProfileIdText('uAa0KZ3MeJDFBaf')}</SProfileId>
							</STextWrapper>
						</Grid>
					</Grid>
					<Grid item component={SCheckIcon}></Grid>
				</SWrapper>
				<Divider />

				<List sx={{ padding: 0 }} dense>
					<ListItemButton>
						<ListItem>
							<ListItemText>Add an existing account</ListItemText>
						</ListItem>
					</ListItemButton>
					<ListItemButton>
						<ListItem>
							<ListItemText>Log out @uAa0KZ3MeJDFBaf</ListItemText>
						</ListItem>
					</ListItemButton>
				</List>
			</Popover>
		</>
	);
};

export default ProfileButton;
