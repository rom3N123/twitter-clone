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
import { Form, IFormikDefaultProps } from "formik";
import * as yup from "yup";
import FormDialog from "@components/Dialogs/FormDialog";
import withShowPassword, { IWithPasswordProps } from "@hocs/withShowPassword";
import { useNavigate } from "react-router-dom";
import BlackAndWhiteButton from "@components/Buttons/BlackAndWhiteButton";

const formInitialValues = {
    email: "",
    password: "",
};

const formValidationSchema = yup.object().shape({
    email: yup.string().email("Enter correct E-Mail").required("Required"),
    password: yup
        .string()
        .min(8, "Password must be at least of 8 characters long")
        .required("Required"),
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
            {({ dirty, touched, isValid }: IFormikDefaultProps) => (
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
                        <BlackAndWhiteButton
                            height={42}
                            type="submit"
                            fullWidth
                            title="Войти"
                            disabled={!dirty || !touched || !isValid}
                        />
                    </DialogActions>
                </FormControl>
            )}
        </FormDialog>
    );
};

export default withShowPassword(LoginModal);
