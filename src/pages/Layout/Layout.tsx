import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Navigation from "@components/Navigation";
import Searchbar from "@components/PageComponents/Searchbar";
import S from "./Layout.styled";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";

const Layout = () => {
    return (
        <section>
            <Container maxWidth="lg">
                <Grid container>
                    <S.SideContent xs={3}>
                        <Navigation />
                    </S.SideContent>

                    <S.MainContent xs={6}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </S.MainContent>

                    <S.SideContent sx={{ paddingLeft: "20px" }} xs={3}>
                        <Routes>
                            <Route path="/" element={<Searchbar />}></Route>
                        </Routes>
                    </S.SideContent>
                </Grid>
            </Container>
        </section>
    );
};

export default Layout;
