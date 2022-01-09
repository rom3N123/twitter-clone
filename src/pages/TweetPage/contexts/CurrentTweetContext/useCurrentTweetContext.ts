import { useContext } from "react";
import { CurrentTweetContext } from "./CurrentTweetContextProvider";

const useCurrentTweetContext = () => {
    return useContext(CurrentTweetContext);
};

export default useCurrentTweetContext;
