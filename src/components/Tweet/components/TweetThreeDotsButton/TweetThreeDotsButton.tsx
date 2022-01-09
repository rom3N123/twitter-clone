import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IPopoverListItem } from "@components/PopoverList/PopoverList";
import { useMutation, useQueryClient } from "react-query";
import TweetsService from "@services/TweetsService";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import { IUser } from "@interfaces/api/user";
import ThreeDotsButton from "@components/ThreeDotsButton";

interface IThreeDotsButtonProps {
    user: IUser;
    tweetId: string;
}

const TweetThreeDotsButton: React.FC<IThreeDotsButtonProps> = ({
    user,
    tweetId,
}): React.ReactElement => {
    const authUser = useAppSelector(selectUserState);

    const queryClient = useQueryClient();

    const deleteMutation = useMutation(
        () => {
            return TweetsService.delete(authUser._id, tweetId);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["tweets", authUser._id]);
            },
        }
    );

    const items: IPopoverListItem[] = [];

    if (authUser._id === user!._id) {
        items.unshift({
            label: "Delete",
            icon: <DeleteOutlineOutlinedIcon />,
            onClick: () => deleteMutation.mutate(),
        });
    }

    return <ThreeDotsButton items={items} />;
};

export default TweetThreeDotsButton;
