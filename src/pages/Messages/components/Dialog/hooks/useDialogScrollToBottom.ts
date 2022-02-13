import { EmptyFunc } from "./../../../../../types/helpers";
import useDialogBottomSticky from "./useDialogBottomSticky";
import { ContainerRef } from "./../Dialog";

interface UseDialogScrollToBottomValue {
    scrollToBottom: EmptyFunc;
    scrollToBottomIfSticked: EmptyFunc;
}

const useDialogScrollToBottom = (
    containerRef: ContainerRef
): UseDialogScrollToBottomValue => {
    const hasStickedToBottom = useDialogBottomSticky(containerRef);

    const scrollToBottom = (): void => {
        containerRef.current.scrollTo({
            top: containerRef.current.scrollHeight,
        });
    };

    const scrollToBottomIfSticked = (): void => {
        if (hasStickedToBottom) {
            scrollToBottom();
        }
    };

    return {
        scrollToBottom,
        scrollToBottomIfSticked,
    };
};

export default useDialogScrollToBottom;
