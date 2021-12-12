import React from "react";
import IconButton from "@mui/material/IconButton";
import ImageIcon from "@mui/icons-material/ImageOutlined";
import EmojiIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import S from "./TweetForm.styled";

const MAX_LENGTH = 300;

const TweetForm: React.FC = (): React.ReactElement => {
    const [value, setValue] = React.useState("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value);
    };

    const progress = (value.length / 300) * 100;

    return (
        <S.Container>
            <S.SAvatar />
            <S.FormWrapper>
                <S.TextArea
                    maxLength={MAX_LENGTH}
                    value={value}
                    onChange={handleChange}
                    placeholder="What's happening?"
                />
                <S.SDivider />

                <S.FormActions>
                    <div>
                        <IconButton>
                            <ImageIcon />
                        </IconButton>

                        <IconButton>
                            <EmojiIcon />
                        </IconButton>
                    </div>

                    <S.ButtonsWrapper>
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
                                <S.ButtonsDivider />
                            </>
                        )}

                        <Button variant="contained" disabled={!value}>
                            Tweet
                        </Button>
                    </S.ButtonsWrapper>
                </S.FormActions>
            </S.FormWrapper>
        </S.Container>
    );
};

export default TweetForm;
