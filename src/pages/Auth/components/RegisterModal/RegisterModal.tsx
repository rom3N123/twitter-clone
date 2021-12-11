import React from "react";
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    IconButton,
    InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Dialog } from "@components/Material";
import { Header } from "@components/Modals";
import { Input } from "@components/FormControl";
import { Formik, Form } from "formik";
import * as yup from "yup";

const formInitialValues = {
    name: "",
    email: "",
    password: "",
};

const formValidationSchema = yup.object().shape({
    name: yup
        .string("Введите корректное имя")
        .max(50, "Максимум 50 символов")
        .required("Поле обязательно"),
    email: yup
        .string()
        .email("Введите корретный адрес")
        .required("Поле обязательно"),
    password: yup
        .string()
        .min(8, "Минимум 8 символов")
        .required("Поле обязательно"),
});

const RegisterModal = ({ open, onClose }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const inputs = React.useMemo(
        () => [
            { name: "name", label: "Имя" },
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
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            },
        ],
        [showPassword]
    );

    return (
        <Dialog open={open} onClose={onClose}>
            <Header onClose={onClose} />
            <DialogTitle>Создайте учетную запись</DialogTitle>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={formInitialValues}
                validationSchema={formValidationSchema}
            >
                {({ dirty, touched, isValid }) => {
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
                                <Button
                                    disabled={!dirty || !touched || !isValid}
                                    type="submit"
                                    fullWidth
                                >
                                    Создать
                                </Button>
                            </DialogActions>
                        </FormControl>
                    );
                }}
            </Formik>
        </Dialog>
    );
};

export default RegisterModal;
