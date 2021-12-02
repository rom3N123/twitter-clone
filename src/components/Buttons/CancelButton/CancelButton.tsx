import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { SIconButton } from './CancelButton.styled';

const CancelButton = () => {
	return (
		<SIconButton>
			<CancelIcon />
		</SIconButton>
	);
};

export default CancelButton;
