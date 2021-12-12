import React from 'react';
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    IconButton,
    InputAdornment,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Dialog from '@components/Material/Dialog';
import Header from '@components/Material/Dialog/components/Header';
import Input from '@components/FormControl/Input';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { IDialogCommonProps } from 'interfaces/components';

const formInitialValues = {
    name: '',
    email: '',
    password: '',
};

const formValidationSchema = yup.object().shape({
    name: yup
        .string()
        .max(50, 'Максимум 50 символов')
        .required('Поле обязательно'),
    email: yup
        .string()
        .email('Введите корретный адрес')
        .required('Поле обязательно'),
    password: yup
        .string()
        .min(8, 'Минимум 8 символов')
        .required('Поле обязательно'),
});

interface IRegisterModalProps extends IDialogCommonProps {}

const RegisterModal: React.FC<IRegisterModalProps> = ({
    open,
    onClose,
}): React.ReactElement => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleFormSubmit = () => {};

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const inputs = React.useMemo(
        () => [
            { name: 'name', label: 'Имя' },
            { name: 'email', label: 'Почта' },
            {
                name: 'password',
                type: showPassword ? 'text' : 'password',
                label: 'Пароль',
                InputProps: {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='toggle password visibility'
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
                        <FormControl component={Form} margin='dense' fullWidth>
                            <DialogContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '24px',
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
                                    type='submit'
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
