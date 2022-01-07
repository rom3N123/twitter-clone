import React from "react";
import Button from "@mui/material/Button";
import UsersService from "@services/UsersService";
import { IUserFollowButton } from "../UserFollowButton/UserFollowButton";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@redux/hooks";
import { selectUserState, setUserAction } from "@redux/ducks/user";
import { useQueryClient } from "react-query";
import { SButton } from "./UnfollowButton.styled";

const UnfollowButton: React.FC<IUserFollowButton> = ({
    user,
}): React.ReactElement => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const { _id } = useAppSelector(selectUserState);
    const queryClient = useQueryClient();
    const [title, setTitle] = React.useState<string>("Following");

    const onButtonClickHandler = async (): Promise<void> => {
        setIsLoading(true);
        const updatedUser = await UsersService.unfollow(user._id, _id);
        dispatch(setUserAction(updatedUser));
        queryClient.invalidateQueries(["user", user._id]);
        setIsLoading(false);
    };

    return (
        <SButton
            onMouseEnter={() => setTitle("Unfollow")}
            onMouseLeave={() => setTitle("Following")}
            disabled={isLoading}
            variant="outlined"
            onClick={onButtonClickHandler}
        >
            {title}
        </SButton>
    );
};

export default UnfollowButton;
