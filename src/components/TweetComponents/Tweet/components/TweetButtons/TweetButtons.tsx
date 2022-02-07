import React from "react";
import ChatIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FileUploadIcon from "@mui/icons-material/FileUploadOutlined";
import FavoriteFilledIcon from "@mui/icons-material/Favorite";
import TweetsService from "@services/TweetsService";
import IconButtonWithNumber from "@components/Buttons/IconButtonWithNumber";
import { IIconButtonWithNumberProps } from "@components/Buttons/IconButtonWithNumber/IconButtonWithNumber";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import { ITweet } from "@interfaces/api/tweet";

export interface ITweetButtonsProps {
    onFavoriteClick: (tweet: ITweet) => void;
    tweet: ITweet;
}

const TweetButtons: React.FC<ITweetButtonsProps> = ({
    tweet,
    onFavoriteClick,
}): React.ReactElement => {
    const authUser = useAppSelector(selectUserState);

    const onButtonClickHandler =
        (func: (tweet: ITweet) => void) =>
        (e: React.MouseEvent): void => {
            e.stopPropagation();
            func(tweet);
        };

    const onFavoriteIconClickHandler = async (tweet: ITweet): Promise<void> => {
        await TweetsService.like(authUser._id, tweet._id);
        if (onFavoriteClick) {
            onFavoriteClick(tweet);
        }
    };

    const buttons: IIconButtonWithNumberProps[] = [
        {
            icon: <ChatIcon />,
            onClick: onButtonClickHandler(() => {}),
            number: tweet.replies.length,
            tooltipTitle: "Reply",
        },
        {
            icon: <ShareIcon />,
            color: "success",
            number: tweet.retweets.length,
            onClick: onButtonClickHandler(() => {}),
            tooltipTitle: "Retweet",
        },
        {
            icon: <FavoriteIcon />,
            color: "warning",
            number: tweet.likes.length,
            onClick: onButtonClickHandler(onFavoriteIconClickHandler),
            filledIcon: <FavoriteFilledIcon />,
            isFilledIcon: tweet.likes.includes(authUser._id),
            tooltipTitle: "Like",
        },
        {
            icon: <FileUploadIcon />,
            onClick: (): void => {},
            tooltipTitle: "Share",
        },
    ];

    return (
        <>
            {buttons.map((button, index) => (
                <IconButtonWithNumber key={index} {...button} />
            ))}
        </>
    );
};

export default TweetButtons;
