import React from "react";
import { Link as MuiLink } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link, useParams, useNavigate } from "react-router-dom";
import { LoginModal, RegisterModal } from "./components";

import {
    AuthPage,
    LeftSide,
    RightSide,
    RightSideContent,
    TwitterIconBg,
    TwitterIcon,
    Button,
} from "./styles";

const Auth = () => {
    const { login, registration } = useParams();
    const [modalVisible, setModalVisible] = React.useState<string>("");

    const navigate = useNavigate();

    const handleOpenRegisterModal = () => {
        navigate("registration");
    };

    const handleCloseModal = () => navigate("/auth");

    React.useEffect(() => {
        const modalParam = login || registration;

        if (modalParam) {
            setModalVisible(modalParam);
        } else {
            setModalVisible("");
        }
    }, [login, registration]);

    return (
        <AuthPage>
            <RegisterModal
                open={modalVisible === "registration"}
                onClose={handleCloseModal}
            />
            <LoginModal
                open={modalVisible === "login"}
                onClose={handleCloseModal}
            />

            <LeftSide>
                <TwitterIconBg />
            </LeftSide>
            <RightSide>
                <RightSideContent>
                    <TwitterIcon />
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

                    <Button
                        onClick={handleOpenRegisterModal}
                        sx={{ width: "30%" }}
                    >
                        Зарегистрируйтесь
                    </Button>

                    <Typography sx={{ marginTop: "20px" }} variant="body1">
                        Уже зарегистрированы?{" "}
                        <MuiLink component={Link} to="/auth/login">
                            Войдите
                        </MuiLink>
                    </Typography>
                </RightSideContent>
            </RightSide>
        </AuthPage>
    );
};

export default Auth;
