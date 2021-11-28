import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Navigation } from '../../components';
import { SContent, SMainContent } from './Layout.styled';
import { Routes, Route } from 'react-router-dom';
import { Home } from '..';

const Layout = () => {
	return (
		<section>
			<Container maxWidth='lg'>
				<Grid container>
					<SContent xs={3}>
						<Navigation />
					</SContent>

					<SMainContent xs={6}>
						<Routes>
							<Route path='/' element={<Home />} />
						</Routes>
					</SMainContent>

					<SContent xs={3}></SContent>
				</Grid>
			</Container>
		</section>
	);
};

export default Layout;
