import React from "react";

export interface IUseHoverValue {
    isHover: boolean;
    onHover: () => void;
}

const useHover = (node: HTMLElement) => {
    const [isHover, setIsHover] = React.useState<boolean>(false);

    const setHover = (payload: boolean) => {
        setIsHover(payload);
    };

    React.useEffect(() => {
        if (node) {
            const onMouseEnter = () => {
                setIsHover(true);
            };

            const onMouseLeave = () => {
                setIsHover(false);
            };

            node.addEventListener("mouseover", onMouseEnter);
            node.addEventListener("mouseout", onMouseLeave);

            return () => {
                node.removeEventListener("mouseover", onMouseEnter);
                node.removeEventListener("mouseout", onMouseLeave);
            };
        }
    }, [node]);

    return { isHover, setHover };
};

export default useHover;
