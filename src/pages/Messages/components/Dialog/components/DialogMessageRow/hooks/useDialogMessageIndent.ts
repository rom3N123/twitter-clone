import { IsPreviousUserTheSameProps } from "./types";
import useIsPreviousMessageBySameUser from "./useIsPreviousMessageBySameUser";

const useDialogMessageIndent = ({
    user,
    messages,
    index,
}: IsPreviousUserTheSameProps): number => {
    let indent: number = 0;

    if (index !== 0) {
        const isTheSameUser = useIsPreviousMessageBySameUser({
            user,
            messages,
            index,
        });

        if (isTheSameUser) {
            indent = 5;
        } else {
            indent = 20;
        }
    }

    return indent;
};

export default useDialogMessageIndent;
