import React from "react";
import BlackAndWhiteButton from "../BlackAndWhiteButton";
import UsersService from "@services/UsersService";
import { useDispatch } from "react-redux";
import { IUserFollowButton } from "../UserFollowButton/UserFollowButton";
import { useQueryClient } from "react-query";
import { setUserAction } from "@redux/ducks/user";

const FollowButton: React.FC<IUserFollowButton> = ({
    user,
}): React.ReactElement => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const queryClient = useQueryClient();

    const onButtonClickHandler = async (): Promise<void> => {
        setIsLoading(true);
        const updatedUser = await UsersService.follow(user._id);
        dispatch(setUserAction(updatedUser));
        queryClient.invalidateQueries(["user", user._id]);
        setIsLoading(false);
    };

    return (
        <BlackAndWhiteButton
            disabled={isLoading}
            onClick={onButtonClickHandler}
            title="Follow"
        />
    );
};

export default FollowButton;
