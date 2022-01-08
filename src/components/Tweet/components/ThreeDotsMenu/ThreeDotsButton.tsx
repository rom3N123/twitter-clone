import React from "react";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import Popover from "@mui/material/Popover";
import { TweetButton } from "@components/Tweet/Tweet.styled";
import usePopover from "@hooks/usePopover";
import PopoverList from "@components/PopoverList";
import { IPopoverListItem } from "@components/PopoverList/PopoverList";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useMutation, useQueryClient } from "react-query";
import TweetsService from "@services/TweetsService";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import { IUser } from "@interfaces/api/user";

interface IThreeDotsButtonProps {
    user: IUser;
    tweetId: string;
}

const ThreeDotsButton: React.FC<IThreeDotsButtonProps> = ({
    user,
    tweetId,
}): React.ReactElement => {
    const buttonRef = React.useRef<HTMLDivElement>(null);
    const { anchor, openPopover, closePopover } =
        usePopover<HTMLButtonElement>();
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
            onClick: deleteMutation.mutate,
        });
    }

    return (
        <div ref={buttonRef}>
            <TweetButton onClick={openPopover}>
                <MoreIcon />
            </TweetButton>

            <Popover
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={closePopover}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                PaperProps={{
                    sx: {
                        padding: 0,
                        borderRadius: "3px",
                    },
                }}
            >
                <PopoverList onPopoverClose={closePopover} items={items} />
            </Popover>
        </div>
    );
};

export default ThreeDotsButton;
