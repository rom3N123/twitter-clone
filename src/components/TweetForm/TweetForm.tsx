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
import TweetsService from "@services/TweetsService";

const MAX_LENGTH = 300;

const initialValues = {
    text: "",
};

type InitialValuesType = typeof initialValues;

const TweetForm: React.FC = (): React.ReactElement => {
    const [value, setValue] = React.useState("");
    const user = useAppSelector(selectUserState);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value);
    };

    const onFormSubmit = async (
        values: InitialValuesType,
        { setSubmitting }: FormikHelpers<InitialValuesType>
    ): Promise<void> => {
        try {
            await TweetsService.create(user._id, { text: value });
        } catch (e) {}

        setSubmitting(false);
    };

    const progress = (value.length / 300) * 100;

    return (
        <S.SContainer>
            <ProfileUserAvatar size={48} user={user} />
            <Formik onSubmit={onFormSubmit} initialValues={initialValues}>
                {({ dirty, touched, isSubmitting }) => (
                    <S.SFormWrapper>
                        <S.STextArea
                            name="text"
                            maxLength={MAX_LENGTH}
                            value={value}
                            onChange={handleChange}
                            placeholder="What's happening?"
                        />
                        <S.SDivider />

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
                                    Tweet
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
