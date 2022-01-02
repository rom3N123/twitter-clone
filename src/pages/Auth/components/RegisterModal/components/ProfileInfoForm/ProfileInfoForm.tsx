import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import FormControl from "@mui/material/FormControl";
import Input from "@components/FormControl/Input";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import BlackAndWhiteButton from "@components/Buttons/BlackAndWhiteButton";
import DialogTitle from "@mui/material/DialogTitle";
import Text from "@components/Text";
import YearSelect from "@components/FormControl/Selects/YearSelect";
import { Box } from "@mui/system";
import Flex from "@styled/components/Flex.styled";
import MonthSelect from "@components/FormControl/Selects/MonthSelect";
import DaySelect from "@components/FormControl/Selects/DaySelect";
import withShowPassword, { IWithPasswordProps } from "@hocs/withShowPassword";

const formInitialValues = {
    name: "",
    email: "",
    password: "",
    year: "",
    month: "",
    day: "",
};

export type ProfileInfoFormValuesType = typeof formInitialValues;

const formValidationSchema = yup.object().shape({
    name: yup.string().max(50, "Максимум 50 символов").required("Обязательно"),
    email: yup
        .string()
        .email("Введите корретный адрес")
        .required("Обязательно"),
    password: yup
        .string()
        .min(8, "Минимум 8 символов")
        .required("Поле обязательно"),
    year: yup.number().required("Обязательно"),
    month: yup.number().required("Обязательно"),
    day: yup.number().required("Обязательно"),
});

interface IProfileInfoFormProps extends IWithPasswordProps {
    onFormSubmit: (values: ProfileInfoFormValuesType) => void;
}

const ProfileInfoForm: React.FC<IProfileInfoFormProps> = ({
    onFormSubmit,
    isPasswordVisible,
    changePasswordVisibility,
}): React.ReactElement => {
    const inputs = [
        {
            name: "name",
            label: "Имя",
        },
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
        <Formik
            initialValues={formInitialValues}
            validationSchema={formValidationSchema}
            onSubmit={onFormSubmit}
        >
            {({ dirty, touched, isValid }) => (
                <>
                    <DialogTitle sx={{ paddingBottom: 0 }}>
                        Создайте учётную запись
                    </DialogTitle>
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

                            <div>
                                <Text fontWeight={700}>Дата рождения</Text>
                                <Text color="gray">
                                    Эта информация не будет общедоступной.
                                    Подтвердите свой возраст, даже если эта
                                    учетная запись предназначена для компании,
                                    домашнего животного и т. д.
                                </Text>

                                <FormControl
                                    sx={{ marginTop: "10px" }}
                                    fullWidth
                                    margin="dense"
                                >
                                    <Flex gap={10}>
                                        <Box sx={{ width: "50%" }}>
                                            <YearSelect />
                                        </Box>
                                        <Box sx={{ width: "25%" }}>
                                            <MonthSelect />
                                        </Box>
                                        <Box sx={{ width: "25%" }}>
                                            <DaySelect />
                                        </Box>
                                    </Flex>
                                </FormControl>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <BlackAndWhiteButton
                                disabled={Boolean(
                                    !dirty || !touched || !isValid
                                )}
                                type="submit"
                                fullWidth
                                title="Далее"
                                height={42}
                            />
                        </DialogActions>
                    </FormControl>
                </>
            )}
        </Formik>
    );
};

export default withShowPassword(ProfileInfoForm);
