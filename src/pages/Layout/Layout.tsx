import React from 'react';
import { Container, Grid } from '@mui/material';
import { Navigation } from '../../components';

const Layout = () => {
	return (
		<section>
			<Container maxWidth='lg'>
				<Grid container>
					<Grid item xs={3}>
						<Navigation />
					</Grid>
					<Grid item xs={6}>
						<div style={{ width: 300, height: 300 }}>CONTENT</div>
						<div style={{ width: 300, height: 300 }}>CONTENT</div>
						<div style={{ width: 300, height: 300 }}>CONTENT</div>{' '}
						<div style={{ width: 300, height: 300 }}>CONTENT</div>
						<div style={{ width: 300, height: 300 }}>CONTENT</div>
						<div style={{ width: 300, height: 300 }}>CONTENT</div>
						<div style={{ width: 300, height: 300 }}>CONTENT</div>
						<div style={{ width: 300, height: 300 }}>CONTENT</div>
						<div style={{ width: 300, height: 300 }}>CONTENT</div>
						<div style={{ width: 300, height: 300 }}>CONTENT</div>
						<div style={{ width: 300, height: 300 }}>CONTENT</div>
						<div style={{ width: 300, height: 300 }}>CONTENT</div>
						<div style={{ width: 300, height: 300 }}>CONTENT</div>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default Layout;
