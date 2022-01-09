import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IPopoverListItem } from "@components/PopoverList/PopoverList";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import ThreeDotsButton from "@components/ThreeDotsButton";
import { ITweet } from "@interfaces/api/tweet";

export interface ITweetThreeDotsButtonProps {
    tweet: ITweet;
    onDeleteClick: () => void;
}

const TweetThreeDotsButton: React.FC<ITweetThreeDotsButtonProps> = ({
    tweet,
    onDeleteClick,
}): React.ReactElement => {
    const authUser = useAppSelector(selectUserState);

    const items: IPopoverListItem[] = [];

    if (authUser._id === tweet.user!._id) {
        items.unshift({
            label: "Delete",
            icon: <DeleteOutlineOutlinedIcon />,
            onClick: onDeleteClick,
        });
    }

    return <ThreeDotsButton items={items} />;
};

export default TweetThreeDotsButton;
