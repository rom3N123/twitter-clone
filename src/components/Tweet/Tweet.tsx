import React from "react";
import { Link } from "react-router-dom";
import S from "./Tweet.styled";

interface ITweetProps {
    tweet: {
        publishDate: string;
        text: string;
    };
    author: {
        id: number;
        name: string;
        nickname: string;
    };
    style?: object;
}

const Tweet: React.FC<ITweetProps> = ({
    author,
    tweet,
    style,
}): React.ReactElement => {
    return (
        <S.TweetWrapper style={style}>
            <S.TweetInner>
                <Link to={`/${author.id}`}>
                    <S.AuthorAvatar />
                </Link>

                <S.TweetContent>
                    <S.AuthorInfo>
                        <S.TweetTypography
                            sx={{
                                textDecoration: "none",
                            }}
                            to={`/profile/${author.id}`}
                            component={Link}
                            userName
                        >
                            <S.TweetTypography component="span">
                                {author.name}
                            </S.TweetTypography>

                            <S.TweetTypography component="span" grayTextColor>
                                @{author.nickname} · {tweet.publishDate}
                            </S.TweetTypography>
                        </S.TweetTypography>
                    </S.AuthorInfo>

                    <S.TweetTypography>{tweet.text}</S.TweetTypography>
                </S.TweetContent>
            </S.TweetInner>
        </S.TweetWrapper>
    );
};

export default Tweet;
