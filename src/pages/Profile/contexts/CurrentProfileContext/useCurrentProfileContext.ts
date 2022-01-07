import { CurrentProfileContext } from "./CurrentProfileContextProvider";
import { useContext } from "react";

const useCurrentProfileContext = () => {
    return useContext(CurrentProfileContext);
};

export default useCurrentProfileContext;
