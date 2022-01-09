import React from "react";
import IconButton from "@mui/material/IconButton";
import ImageIcon from "@mui/icons-material/ImageOutlined";
import EmojiIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import * as S from "./TweetForm.styled";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import ProfileUserAvatar from "@components/ProfileUserAvatar";
import { Formik, FormikHelpers } from "formik";
import { IUser } from "@interfaces/api/user";

const MAX_LENGTH = 300;

const initialValues = {
    text: "",
};

type InitialValuesType = typeof initialValues;

export interface ITweetFormProps {
    onSubmit: (text: string, user: IUser) => Promise<any>;
    buttonTitle?: string;
    placeholder?: string;
}

const TweetForm: React.FC<ITweetFormProps> = ({
    onSubmit,
    buttonTitle = "Tweet",
    placeholder = "What's happening?",
}): React.ReactElement => {
    const [value, setValue] = React.useState("");
    const user = useAppSelector(selectUserState);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value);
    };

    const onFormSubmit = async (
        values: InitialValuesType,
        { setSubmitting }: FormikHelpers<InitialValuesType>
    ): Promise<void> => {
        await onSubmit(value, user);
        setSubmitting(false);
        setValue("");
    };

    const progress = (value.length / 300) * 100;

    return (
        <S.SContainer>
            <ProfileUserAvatar size={48} user={user} />
            <Formik onSubmit={onFormSubmit} initialValues={initialValues}>
                {({ touched, isSubmitting }) => (
                    <S.SFormWrapper>
                        <S.STextArea
                            name="text"
                            maxLength={MAX_LENGTH}
                            value={value}
                            onChange={handleChange}
                            placeholder={placeholder}
                        />

                        <S.SFormActions>
                            <div>
                                <IconButton>
                                    <ImageIcon />
                                </IconButton>

                                <IconButton>
                                    <EmojiIcon />
                                </IconButton>
                            </div>

                            <S.SButtonsWrapper>
                                {!!progress && (
                                    <>
                                        <CircularProgress
                                            size={25}
                                            variant="determinate"
                                            value={progress}
                                            color={
                                                progress === 100
                                                    ? "warning"
                                                    : "secondary"
                                            }
                                        />
                                        <S.SButtonsDivider />
                                    </>
                                )}

                                <Button
                                    variant="contained"
                                    disabled={
                                        !touched || !value || isSubmitting
                                    }
                                    type="submit"
                                >
                                    {buttonTitle}
                                </Button>
                            </S.SButtonsWrapper>
                        </S.SFormActions>
                    </S.SFormWrapper>
                )}
            </Formik>
        </S.SContainer>
    );
};

export default TweetForm;
