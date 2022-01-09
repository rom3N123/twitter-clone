import React, { Suspense } from "react";
import Navigation from "@components/Navigation";
import Searchbar from "@components/PageComponents/Searchbar";
import * as S from "./Layout.styled";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const TweetPage = React.lazy(() => import("../TweetPage"));
const Home = React.lazy(() => import("../Home"));
const Profile = React.lazy(() => import("../Profile"));

const Layout: React.FC = (): React.ReactElement => {
    return (
        <section>
            <Suspense fallback={<Loader />}>
                <S.SContentContainer>
                    <S.SContainer>
                        <S.SNavigationContainer>
                            <Navigation />
                        </S.SNavigationContainer>

                        <S.SMainContent>
                            <Suspense fallback={<Loader />}>
                                <Routes>
                                    <Route index element={<Home />} />
                                    <Route
                                        path="/:userId"
                                        element={<Profile />}
                                    />
                                    <Route
                                        path="/:userId/tweet/:tweetId"
                                        element={<TweetPage />}
                                    />
                                </Routes>
                            </Suspense>
                        </S.SMainContent>

                        <S.SRightSideContainer>
                            <Routes>
                                <Route index element={<Searchbar />} />
                            </Routes>
                        </S.SRightSideContainer>
                    </S.SContainer>
                </S.SContentContainer>
            </Suspense>
        </section>
    );
};

export default Layout;
