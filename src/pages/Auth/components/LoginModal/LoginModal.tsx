import React from "react";
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputAdornment,
    IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Header from "@components/Material/Dialog/components/Header";
import Dialog from "@components/Material/Dialog";
import Input from "@components/FormControl/Input";
import { Formik, Form } from "formik";
import * as yup from "yup";

const formInitialValues = {
    email: "",
    password: "",
};

const formValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Введите корретный адрес")
        .required("Поле обязательно"),
    password: yup.string().required("Поле обязательно"),
});

interface ILoginModalProps {
    open: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<ILoginModalProps> = ({
    open,
    onClose,
}): React.ReactElement => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const inputs = [
        { name: "email", label: "Почта" },
        {
            name: "password",
            type: showPassword ? "text" : "password",
            label: "Пароль",
            InputProps: {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            },
        },
    ];

    const handleFormSubmit = () => {};

    return (
        <Dialog open={open} onClose={onClose}>
            <Header onClose={onClose} />
            <DialogTitle>Авторизация</DialogTitle>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={formInitialValues}
                validationSchema={formValidationSchema}
            >
                {() => {
                    return (
                        <FormControl component={Form} margin="dense" fullWidth>
                            <DialogContent
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "24px",
                                }}
                            >
                                {inputs.map((input) => (
                                    <Input
                                        key={input.name}
                                        fullWidth
                                        {...input}
                                    />
                                ))}
                            </DialogContent>
                            <DialogActions>
                                <Button type="submit" fullWidth>
                                    Войти
                                </Button>
                            </DialogActions>
                        </FormControl>
                    );
                }}
            </Formik>
        </Dialog>
    );
};

export default LoginModal;
