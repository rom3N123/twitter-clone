import React from "react";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link, useParams, useNavigate, Route, Routes } from "react-router-dom";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import * as S from "./Auth.styled";
import { useAppDispatch } from "@redux/hooks";

const Auth = () => {
    const { login, registration } = useParams();
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleCloseModal = (): void => {
        navigate("/auth");
    };

    const handleOpenRegisterModal = (): void => {
        navigate("registration");
    };

    return (
        <S.SContainer>
            <S.SLeftSide>
                <S.STwitterIconBg />
            </S.SLeftSide>
            <S.SRightSide>
                <S.SRightSideContent>
                    <S.STwitterIcon />
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: "64px",
                            maxWidth: 480,
                            margin: "48px 0",
                        }}
                        variant="h1"
                    >
                        В курсе происходящего
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: "31px",
                            fontWeight: 600,
                            marginBottom: "31px",
                        }}
                    >
                        Присоединяйтесь к Твиттеру прямо сейчас!
                    </Typography>

                    <S.SButton
                        variant="contained"
                        onClick={handleOpenRegisterModal}
                        sx={{ width: "30%" }}
                    >
                        Зарегистрируйтесь
                    </S.SButton>

                    <Typography sx={{ marginTop: "20px" }} variant="body1">
                        Уже зарегистрированы?{" "}
                        <MuiLink component={Link} to="/auth/login">
                            Войдите
                        </MuiLink>
                    </Typography>
                </S.SRightSideContent>
            </S.SRightSide>

            <Routes>
                <Route path="login" element={<LoginModal />} />
                <Route path="registration" element={<RegisterModal />} />
            </Routes>
        </S.SContainer>
    );
};

export default Auth;
