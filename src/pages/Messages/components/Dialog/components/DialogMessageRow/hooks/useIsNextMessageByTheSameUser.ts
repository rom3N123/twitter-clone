import { IsPreviousUserTheSameProps } from "./types";

const useIsNextMessageByTheSameUser = ({
    user,
    messages,
    index,
}: IsPreviousUserTheSameProps): boolean => {
    if (!messages[index + 1]) return false;

    const { user: nextUser } = messages[index + 1];

    return nextUser._id === user._id;
};

export default useIsNextMessageByTheSameUser;
