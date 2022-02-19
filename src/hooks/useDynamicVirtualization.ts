import { VariableSizeList } from "react-window";
import React from "react";

export type SetRowHeight = (index: number, size: number) => void;
export type GetRowHeight = (index: number) => number;
export type RowsHeightsRef = React.MutableRefObject<{
    [index: number]: number;
}>;
export type ListRefType = React.RefObject<VariableSizeList<any>>;

export interface IUseDynamicVirtualizationValue {
    setRowHeight: SetRowHeight;
    getRowHeight: GetRowHeight;
}

const useDynamicVirtualization = (
    listRef: ListRefType,
    fallbackHeight: number
): IUseDynamicVirtualizationValue => {
    const rowsHeightsRef: RowsHeightsRef = React.useRef<{
        [index: number]: number;
    }>({});

    const setRowHeight: SetRowHeight = (index: number, size: number): void => {
        rowsHeightsRef.current = {
            ...rowsHeightsRef.current,
            [index]: size,
        };
        listRef.current?.resetAfterIndex(0);
    };

    const getRowHeight: GetRowHeight = (index: number): number => {
        return rowsHeightsRef.current[index] || fallbackHeight;
    };

    return { setRowHeight, getRowHeight };
};

export default useDynamicVirtualization;
