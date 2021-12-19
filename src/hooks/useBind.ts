import React from "react";

interface IUseBindValue {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    clearValue: () => void;
}

/**
 * Хук для создания контролируемого инпута
 * @param {string} initialValue
 * @returns {IUseBindValue}
 */
const useBind = (initialValue: string = ""): IUseBindValue => {
    const [value, setValue] = React.useState(initialValue);

    const onChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            setValue(e.currentTarget.value);
        },
        []
    );

    const clearValue = React.useCallback((): void => {
        setValue("");
    }, []);

    return React.useMemo(
        () => ({
            value,
            onChange,
            clearValue,
        }),
        [value]
    );
};

export default useBind;