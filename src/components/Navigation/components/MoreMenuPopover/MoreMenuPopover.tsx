import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import {
	SPopover,
	SListIcon,
	SListItemText,
	SDisplayIcon,
	SDisplayDot,
} from './MoreMenuPopover.styled';

import { ReactComponent as SettingsIcon } from '../../../../assets/icons/more/settings.svg';
import { ReactComponent as DisplayIcon } from '../../../../assets/icons/more/display.svg';

interface IMoreMenuPopoverProps {
	anchor: HTMLDivElement | null;
	open: boolean;
	onClose: () => void;
}

const MoreMenuPopover: React.FC<IMoreMenuPopoverProps> = ({
	anchor,
	open,
	onClose,
}): React.ReactElement => {
	return (
		<SPopover
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'center',
				horizontal: 'center',
			}}
			anchorEl={anchor}
			open={Boolean(open)}
			onClose={onClose}>
			<List>
				<ListItemButton>
					<ListItem>
						<SListIcon>
							<SettingsIcon />
						</SListIcon>
						<SListItemText>Settings and privacy</SListItemText>
					</ListItem>
				</ListItemButton>
				<ListItemButton>
					<ListItem>
						<SListIcon>
							<SDisplayIcon>
								<DisplayIcon />
								<SDisplayDot />
							</SDisplayIcon>
						</SListIcon>
						<SListItemText>Display</SListItemText>
					</ListItem>
				</ListItemButton>
			</List>
		</SPopover>
	);
};

export default MoreMenuPopover;
