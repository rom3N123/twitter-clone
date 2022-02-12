import { IsPreviousUserTheSameProps } from "./types";

const useIsNextMessageByTheSameUser = ({
    author,
    messages,
    index,
}: IsPreviousUserTheSameProps): boolean => {
    if (!messages[index + 1]) return false;

    const { author: nextAuthor } = messages[index + 1];

    return nextAuthor._id === author._id;
};

export default useIsNextMessageByTheSameUser;
