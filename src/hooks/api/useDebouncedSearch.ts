import React, { useEffect } from "react";
import { IBindValue } from "@hooks/useBind";
import useDebouncedBind from "@hooks/useDebouncedBind";

interface UseDebouncedSearchValue<M> {
    bind: () => IBindValue;
    results: M[];
}

const useDebouncedSearch = <M>(
    callback: (debouncedValue: string) => Promise<M[]>,
    debounceTimeout: number = 500
): UseDebouncedSearchValue<M> => {
    const [results, setResults] = React.useState<M[]>([]);

    const { bind, debouncedValue } = useDebouncedBind(debounceTimeout);

    useEffect(() => {
        const fetchResults = async () => {
            const results = await callback(debouncedValue);

            setResults(results);
        };

        if (debouncedValue) {
            fetchResults();
        } else if (results.length) {
            setResults([]);
        }
    }, [debouncedValue]);

    return {
        bind,
        results,
    };
};

export default useDebouncedSearch;
