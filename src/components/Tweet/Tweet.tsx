import React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import ChatIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FileUploadIcon from "@mui/icons-material/FileUploadOutlined";
import S from "./Tweet.styled";

interface TweetProps {
    user: {
        nickname: string;
        name: string;
        avatarUrl: string;
    };
    text: string;
    createdAt: number;
    activity: {
        comments: any[];
        likes: any[];
        retweets: any[];
    };
}

const Tweet: React.FC<TweetProps> = ({
    user,
    text,
    createdAt,
    activity,
}): React.ReactElement => {
    return (
        <S.Container>
            {/* Аватар пользователя */}
            <Grid container gap="12px">
                <Grid item>
                    <S.AuthorAvatar
                        src={user.avatarUrl}
                        alt={`Аватарка пользователя ${user.name}`}
                    />
                </Grid>
                {/* Тело твита */}
                <Grid item flex="1">
                    {/* Имя пользователя */}
                    <div>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                            {user.name}{" "}
                            <S.UserLabel>@{user.nickname}</S.UserLabel>
                            {" · "}
                            <S.UserLabel>{createdAt}</S.UserLabel>
                        </Typography>
                    </div>

                    {/* Текст твита */}
                    <Typography variant="body2">{text}</Typography>

                    <S.Buttons>
                        <S.ButtonWrapper>
                            <S.TweetButton color="secondary">
                                <ChatIcon />
                            </S.TweetButton>

                            {!!activity.comments.length && (
                                <S.ButtonLabel>
                                    {activity.comments.length}
                                </S.ButtonLabel>
                            )}
                        </S.ButtonWrapper>

                        <S.TweetButton color="success">
                            <ShareIcon />
                        </S.TweetButton>

                        <S.ButtonWrapper>
                            <S.TweetButton color="warning">
                                <FavoriteIcon />
                            </S.TweetButton>

                            {!!activity.retweets.length && (
                                <S.ButtonLabel>
                                    {activity.retweets.length}
                                </S.ButtonLabel>
                            )}
                        </S.ButtonWrapper>

                        <S.ButtonWrapper>
                            <S.TweetButton color="secondary">
                                <FileUploadIcon />
                            </S.TweetButton>

                            {!!activity.likes.length && (
                                <S.ButtonLabel>
                                    {activity.likes.length}
                                </S.ButtonLabel>
                            )}
                        </S.ButtonWrapper>
                    </S.Buttons>
                </Grid>

                {/* Кнопка "..." */}
                <Grid item>
                    <S.TweetButton>
                        <MoreIcon />
                    </S.TweetButton>
                </Grid>
            </Grid>
        </S.Container>
    );
};

export default Tweet;
