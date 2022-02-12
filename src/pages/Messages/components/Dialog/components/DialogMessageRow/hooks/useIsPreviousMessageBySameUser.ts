import { IsPreviousUserTheSameProps } from "./types";

const useIsPreviousMessageBySameUser = ({
    author,
    messages,
    index,
}: IsPreviousUserTheSameProps): boolean => {
    if (index === 0) return false;

    const { author: prevAuthor } = messages[index - 1];

    return prevAuthor._id === author._id;
};

export default useIsPreviousMessageBySameUser;
