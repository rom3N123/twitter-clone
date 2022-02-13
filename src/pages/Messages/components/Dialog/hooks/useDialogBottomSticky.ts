import React from "react";
import { ContainerRef } from "./../Dialog";

const useDialogBottomSticky = (containerRef: ContainerRef): boolean => {
    const isStickyRef = React.useRef<boolean>(true);

    React.useEffect(() => {
        const callback: EventListener = ({ currentTarget }: Event) => {
            const { scrollTop, clientHeight, scrollHeight }: HTMLDivElement =
                currentTarget as HTMLDivElement;

            const isScrolledToBottom: boolean =
                Math.floor(scrollTop) + clientHeight === scrollHeight;

            isStickyRef.current = isScrolledToBottom;
        };

        containerRef.current.addEventListener("scroll", callback);

        return () => {
            containerRef.current?.removeEventListener("scroll", callback);
        };
    }, []);

    return isStickyRef.current;
};

export default useDialogBottomSticky;
