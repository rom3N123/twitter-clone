import React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@components/FormControl/Input";
import { Form } from "formik";
import * as yup from "yup";
import FormDialog from "@components/Dialogs/FormDialog";
import withShowPassword, { IWithPasswordProps } from "@hocs/withShowPassword";
import { useNavigate } from "react-router-dom";

const formInitialValues = {
    name: "",
    email: "",
    password: "",
};

const formValidationSchema = yup.object().shape({
    name: yup
        .string()
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

interface IRegisterModalProps extends IWithPasswordProps {}

interface IFormikChildrenProps {
    dirty: boolean;
    touched: boolean;
    isValid: boolean;
}

const RegisterModal: React.FC<IRegisterModalProps> = ({
    isPasswordVisible,
    changePasswordVisibility,
}): React.ReactElement => {
    const handleFormSubmit = () => {};

    const navigate = useNavigate();

    const handleCloseModal = () => {
        navigate("/auth");
    };

    const inputs = [
        { name: "name", label: "Имя" },
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

    return (
        <FormDialog
            open={true}
            onClose={handleCloseModal}
            headerTitle="Зарегистрируйтесь"
            initialValues={formInitialValues}
            validationSchema={formValidationSchema}
            onSubmit={handleFormSubmit}
        >
            {({ dirty, touched, isValid }: IFormikChildrenProps) => (
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
                        <Button
                            disabled={!dirty || !touched || !isValid}
                            type="submit"
                            fullWidth
                        >
                            Создать
                        </Button>
                    </DialogActions>
                </FormControl>
            )}
        </FormDialog>
    );
};

export default withShowPassword(RegisterModal);
