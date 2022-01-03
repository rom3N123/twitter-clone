import React, { Suspense } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Navigation from "@components/Navigation";
import Searchbar from "@components/PageComponents/Searchbar";
import * as S from "./Layout.styled";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Home = React.lazy(() => import("../Home"));
const Profile = React.lazy(() => import("../Profile"));

const Layout: React.FC = (): React.ReactElement => {
    return (
        <section>
            <Suspense
                fallback={
                    <S.SLoadingContainer>
                        <CircularProgress />
                    </S.SLoadingContainer>
                }
            >
                <Container maxWidth="lg">
                    <Grid container>
                        <S.SSideContent xs={3}>
                            <Navigation />
                        </S.SSideContent>

                        <S.SMainContent xs={6}>
                            <Suspense
                                fallback={
                                    <S.SLoadingContainer>
                                        <CircularProgress />
                                    </S.SLoadingContainer>
                                }
                            >
                                <Routes>
                                    <Route index element={<Home />} />
                                    <Route
                                        path="/:userId"
                                        element={<Profile />}
                                    />
                                </Routes>
                            </Suspense>
                        </S.SMainContent>

                        <S.SSideContent sx={{ paddingLeft: "20px" }} xs={3}>
                            <Routes>
                                <Route index element={<Searchbar />} />
                            </Routes>
                        </S.SSideContent>
                    </Grid>
                </Container>
            </Suspense>
        </section>
    );
};

export default Layout;
