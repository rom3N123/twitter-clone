import React from "react";
import ChatIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FileUploadIcon from "@mui/icons-material/FileUploadOutlined";
import * as S from "./Tweet.styled";
import { ITweet } from "@interfaces/api/tweet";
import ProfileUserAvatar from "@components/ProfileUserAvatar";
import ThreeDotsButton from "./components/ThreeDotsMenu";
import IconButtonWithNumber, {
    IIconButtonWithNumberProps,
} from "@components/Buttons/IconButtonWithNumber/IconButtonWithNumber";
import Text from "@components/Text";

interface ITweetProps extends ITweet {}

const Tweet: React.FC<ITweetProps> = ({
    _id,
    text,
    publishTimestamp,
    likes,
    comments,
    retweets,
    user,
}): React.ReactElement => {
    const buttons: IIconButtonWithNumberProps[] = [
        {
            icon: <ChatIcon />,
            onClick: (): void => {},
            number: 1,
        },
        {
            icon: <ShareIcon />,
            color: "success",
            number: retweets.length,
            onClick: (): void => {},
        },
        {
            icon: <FavoriteIcon />,
            color: "warning",
            number: likes.length,
            onClick: (): void => {},
        },
        {
            icon: <FileUploadIcon />,
            onClick: (): void => {},
        },
    ];

    return (
        <S.SContainer>
            <S.SInner>
                <ProfileUserAvatar user={user} isWithPopover size={48} />

                <S.STweetBody>
                    <Text fontWeight={600}>
                        {user.name}{" "}
                        <S.SUserLabel>@{publishTimestamp}</S.SUserLabel>
                    </Text>

                    <S.STweetBodyInner>
                        {/* Текст твита */}
                        <Text>{text}</Text>

                        <S.SButtons>
                            {buttons.map((button, index) => (
                                <IconButtonWithNumber key={index} {...button} />
                            ))}
                        </S.SButtons>
                    </S.STweetBodyInner>
                </S.STweetBody>

                <ThreeDotsButton user={user} tweetId={_id} />
            </S.SInner>
        </S.SContainer>
    );
};

export default Tweet;
