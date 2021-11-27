import React from 'react';
import { Container, Grid } from '@mui/material';
import { Navigation } from '../../components';

const Layout = () => {
	return (
		<section>
			<Container maxWidth='lg'>
				<Grid container>
					<Navigation />
				</Grid>
			</Container>
		</section>
	);
};

export default Layout;
