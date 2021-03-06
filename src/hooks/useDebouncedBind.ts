import useBind from "@hooks/useBind";
import useDebounce from "./useDebounce";
import { IBindValue } from "./useBind";

export interface IUseDebouncedBindValue {
    bind: () => IBindValue;
    debouncedValue: string;
    value: string;
}

const useDebouncedBind = (timeout: number = 500): IUseDebouncedBindValue => {
    const { value, onChange, setValue } = useBind();
    const debouncedValue = useDebounce(value, timeout);

    const bind = () => ({
        value,
        onChange,
        setValue,
    });

    return { bind, debouncedValue, value };
};

export default useDebouncedBind;
