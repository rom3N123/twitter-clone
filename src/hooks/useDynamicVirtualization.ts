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
    listRef: ListRefType
): IUseDynamicVirtualizationValue => {
    const rowsHeightsRef: RowsHeightsRef = React.useRef<{
        [index: number]: number;
    }>({});

    const setRowHeight: SetRowHeight = (index: number, size: number): void => {
        listRef.current?.resetAfterIndex(0);
        rowsHeightsRef.current = {
            ...rowsHeightsRef.current,
            [index]: size,
        };
    };

    const getRowHeight: GetRowHeight = (index: number): number => {
        return rowsHeightsRef.current[index] || 112;
    };

    return { setRowHeight, getRowHeight };
};

export default useDynamicVirtualization;
