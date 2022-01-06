import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import ChatIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FileUploadIcon from "@mui/icons-material/FileUploadOutlined";
import * as S from "./Tweet.styled";
import { ITweet } from "@interfaces/api/tweet";
import ProfileUserAvatar from "@components/ProfileUserAvatar";

interface ITweetProps extends ITweet {}

const Tweet: React.FC<ITweetProps> = ({
    _id,
    text,
    publishTimestamp,
    likes,
    comments,
    retweets,
    userId,
    user,
}): React.ReactElement => {
    return (
        <S.SContainer>
            <S.SInner>
                <ProfileUserAvatar user={user} isWithPopover size={48} />

                <S.STweetBody>
                    <S.STweetText sx={{ fontWeight: 600 }}>
                        {user.name}
                        {/* <S.UserLabel>{publishTimestamp}</S.UserLabel> */}
                    </S.STweetText>

                    <S.STweetBodyInner>
                        {/* Текст твита */}
                        <S.STweetText>{text}</S.STweetText>

                        <S.SButtons>
                            <S.SButtonWrapper>
                                <S.TweetButton color="secondary">
                                    <ChatIcon />
                                </S.TweetButton>

                                {!!comments.length && (
                                    <S.ButtonLabel>
                                        {comments.length}
                                    </S.ButtonLabel>
                                )}
                            </S.SButtonWrapper>

                            <S.TweetButton color="success">
                                <ShareIcon />
                            </S.TweetButton>

                            <S.SButtonWrapper>
                                <S.TweetButton color="warning">
                                    <FavoriteIcon />
                                </S.TweetButton>

                                {Boolean(retweets.length) && (
                                    <S.ButtonLabel>
                                        {retweets.length}
                                    </S.ButtonLabel>
                                )}
                            </S.SButtonWrapper>

                            <S.SButtonWrapper>
                                <S.TweetButton color="secondary">
                                    <FileUploadIcon />
                                </S.TweetButton>

                                {Boolean(likes.length) && (
                                    <S.ButtonLabel>
                                        {likes.length}
                                    </S.ButtonLabel>
                                )}
                            </S.SButtonWrapper>
                        </S.SButtons>
                    </S.STweetBodyInner>
                </S.STweetBody>

                <S.TweetButton>
                    <MoreIcon />
                </S.TweetButton>
            </S.SInner>
        </S.SContainer>
    );
};

export default Tweet;
