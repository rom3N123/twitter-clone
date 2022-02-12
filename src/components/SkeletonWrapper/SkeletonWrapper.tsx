import React from "react";
import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";

export interface SkeletonWrapperProps extends SkeletonProps {
    visible: boolean;
    children: React.ReactElement;
}

const SkeletonWrapper = ({
    visible,
    children,
    ...otherProps
}: SkeletonWrapperProps): React.ReactElement => {
    return visible ? children : <Skeleton {...otherProps}>{children}</Skeleton>;
};

export default SkeletonWrapper;
