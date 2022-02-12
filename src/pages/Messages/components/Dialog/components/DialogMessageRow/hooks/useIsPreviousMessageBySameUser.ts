import { IsPreviousUserTheSameProps } from "./types";

const useIsPreviousMessageBySameUser = ({
    user,
    messages,
    index,
}: IsPreviousUserTheSameProps): boolean => {
    if (index === 0) return false;

    const { user: prevUser } = messages[index - 1];

    return prevUser._id === user._id;
};

export default useIsPreviousMessageBySameUser;
