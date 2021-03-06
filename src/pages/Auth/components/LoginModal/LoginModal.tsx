import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@components/FormControl/Input";
import { Form, Formik, FormikHelpers } from "formik";
import * as yup from "yup";
import withShowPassword, { IWithPasswordProps } from "@hocs/withShowPassword";
import { useNavigate } from "react-router-dom";
import BlackAndWhiteButton from "@components/Buttons/BlackAndWhiteButton";
import { useDispatch } from "react-redux";
import { IUserLoginValues } from "_types/api/user";
import { loginAction } from "@redux/ducks/auth/actions";
import Dialog from "@components/Material/Dialog";
import DialogHeader from "@components/Material/Dialog/components/DialogHeader";

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
    const dispatch = useDispatch();

    const handleCloseModal = (): void => {
        navigate("/auth");
    };

    const inputs = [
        { name: "email", label: "E-Mail" },
        {
            name: "password",
            type: isPasswordVisible ? "text" : "password",
            label: "Password",
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

    const handleFormSubmit = async (
        credentials: IUserLoginValues,
        { setSubmitting, setFieldError }: FormikHelpers<IUserLoginValues>
    ): Promise<void> => {
        try {
            await dispatch(loginAction(credentials));
        } catch (error) {
            setFieldError("email", "Incorrect email or password");
        }

        setSubmitting(false);
    };

    return (
        <Dialog open={true} onClose={handleCloseModal}>
            <DialogHeader title="Sign in" onClose={handleCloseModal} />

            <Formik
                initialValues={formInitialValues}
                onSubmit={handleFormSubmit}
                validationSchema={formValidationSchema}
            >
                {({ dirty, touched, isValid, isSubmitting }) => {
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
                                <BlackAndWhiteButton
                                    height={42}
                                    type="submit"
                                    fullWidth
                                    title="Sign in"
                                    disabled={
                                        !dirty ||
                                        !touched ||
                                        !isValid ||
                                        isSubmitting
                                    }
                                />
                            </DialogActions>
                        </FormControl>
                    );
                }}
            </Formik>
        </Dialog>
    );
};

export default withShowPassword(LoginModal);
