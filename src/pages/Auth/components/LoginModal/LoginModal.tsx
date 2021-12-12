import React from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@components/FormControl/Input";
import { Form } from "formik";
import * as yup from "yup";
import FormDialog from "@components/Dialogs/FormDialog";
import { IDialogCommonProps } from "@interfaces/components";
import withShowPassword, { IWithPasswordProps } from "@hocs/withShowPassword";
import { useNavigate } from "react-router-dom";

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

interface ILoginModalProps extends IWithPasswordProps {}

const LoginModal: React.FC<ILoginModalProps> = ({
    isPasswordVisible,
    changePasswordVisibility,
}): React.ReactElement => {
    const navigate = useNavigate();

    const handleCloseModal = () => {
        navigate("/auth");
    };

    const inputs = [
        { name: "email", label: "Почта" },
        {
            name: "password",
            type: isPasswordVisible ? "text" : "password",
            label: "Пароль",
            InputProps: {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={changePasswordVisibility}
                        >
                            {isPasswordVisible ? (
                                <VisibilityOff />
                            ) : (
                                <Visibility />
                            )}
                        </IconButton>
                    </InputAdornment>
                ),
            },
        },
    ];

    const handleFormSubmit = () => {};

    return (
        <FormDialog
            open={true}
            onClose={handleCloseModal}
            headerTitle="Авторизация"
            onSubmit={handleFormSubmit}
            initialValues={formInitialValues}
            validationSchema={formValidationSchema}
        >
            <FormControl component={Form} margin="dense" fullWidth>
                <DialogContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                    }}
                >
                    {inputs.map((input) => (
                        <Input key={input.name} fullWidth {...input} />
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" type="submit" fullWidth>
                        Войти
                    </Button>
                </DialogActions>
            </FormControl>
        </FormDialog>
    );
};

export default withShowPassword(LoginModal);
