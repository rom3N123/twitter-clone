import React from "react";

/**
 * Хук для отложенного изменения значения инпута
 * @param {string} value
 * @param {number} timeout
 * @returns {string}
 */
const useDebounce = (value: string, timeout: number = 500): string => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return debouncedValue;
};

export default useDebounce;
