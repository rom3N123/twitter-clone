import React from "react";
import { Formik } from "formik";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Text from "@components/Text";
import Input from "@components/FormControl/Input";
import FormControl from "@mui/material/FormControl";
import { DialogActions } from "@mui/material";
import BlackAndWhiteButton from "@components/Buttons/BlackAndWhiteButton";
import * as yup from "yup";

const formInitialValues = {
    code: "",
};

const validationSchema = yup.object().shape({
    code: yup.string().required("Обязательно"),
});

interface IEnterEmailCodeFormProps {
    email: string;
    onSubmit: () => void;
}

const EnterEmailCodeForm: React.FC<IEnterEmailCodeFormProps> = ({
    email,
    onSubmit,
}): React.ReactElement => {
    const onEnterEmailHandler = (values: typeof formInitialValues) => {
        onSubmit();
    };

    return (
        <Formik
            initialValues={formInitialValues}
            onSubmit={onEnterEmailHandler}
            validationSchema={validationSchema}
        >
            {({ dirty, isValid }) => (
                <>
                    <DialogTitle>Мы отправили вам код</DialogTitle>
                    <DialogContent>
                        <Text color="gray">
                            Введите код в расположенном ниже поле для
                            подтверждения {email}.
                        </Text>

                        <FormControl
                            sx={{ marginTop: "10px" }}
                            margin="dense"
                            fullWidth
                        >
                            <Input
                                name="code"
                                label="Проверочный код"
                                fullWidth
                            />
                        </FormControl>
                    </DialogContent>

                    <DialogActions>
                        <BlackAndWhiteButton
                            height={42}
                            fullWidth
                            title="Далее"
                            type="submit"
                            disabled={!dirty || !isValid}
                        />
                    </DialogActions>
                </>
            )}
        </Formik>
    );
};

export default EnterEmailCodeForm;
