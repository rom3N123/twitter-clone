import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Navigation } from '../../components';
import { SContent } from './Layout.styled';

const Layout = () => {
	return (
		<section>
			<Container maxWidth='lg'>
				<Grid container>
					<SContent item xs={3}>
						<Navigation />
					</SContent>
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
					<SContent item xs={3}></SContent>
				</Grid>
			</Container>
		</section>
	);
};

export default Layout;
