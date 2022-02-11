import React from "react";
import { ICommonButton } from "_types/components";

export interface IDialogLevel {
    title?: string;
    content: React.ReactNode;
    dialogButtons?: ICommonButton[];
    headerButtons?: ICommonButton[];
}

const callbackByType = {
    increment: (prevState: number): number => prevState + 1,
    decrement: (prevState: number): number => prevState - 1,
};

interface UseMultiLevelDialogValue {
    isFirstLevel: boolean;
    currentLevel: IDialogLevel;
    goToNextLevel: () => void;
    goToPreviousLevel: () => void;
}

const useMultiLevelDialog = (
    levels: IDialogLevel[]
): UseMultiLevelDialogValue => {
    const [activeLevelIndex, setActiveLevelIndex] = React.useState<number>(0);

    const changeIndex = (type: "increment" | "decrement") => () => {
        setActiveLevelIndex(callbackByType[type]);
    };

    const isFirstLevel: boolean = activeLevelIndex === 0;

    const currentLevel: IDialogLevel = levels[activeLevelIndex];

    return {
        goToNextLevel: changeIndex("increment"),
        goToPreviousLevel: changeIndex("decrement"),
        isFirstLevel,
        currentLevel,
    };
};

export default useMultiLevelDialog;
