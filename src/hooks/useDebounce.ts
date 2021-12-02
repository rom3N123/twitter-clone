import React from 'react';

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
