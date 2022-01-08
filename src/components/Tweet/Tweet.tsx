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
import FavoriteFilledIcon from "@mui/icons-material/Favorite";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import TweetsService from "@services/TweetsService";
import { useQueryClient } from "react-query";

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
    const authUser = useAppSelector(selectUserState);

    const queryClient = useQueryClient();

    const buttons: IIconButtonWithNumberProps[] = [
        {
            icon: <ChatIcon />,
            onClick: (): void => {},
            number: comments.length,
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
            onClick: async (): Promise<void> => {
                await TweetsService.like(authUser._id, _id);
                queryClient.invalidateQueries(["tweets", user._id]);
            },
            filledIcon: <FavoriteFilledIcon />,
            isFilledIcon: likes.includes(authUser._id),
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
