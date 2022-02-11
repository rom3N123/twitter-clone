import React from "react";
import UsersService from "@services/UsersService";
import { IUser } from "_types/api/user";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export interface ICurrentProfileContextValue {
    user: IUser | undefined;
}

export const CurrentProfileContext =
    React.createContext<ICurrentProfileContextValue>({ user: undefined });

const CurrentProfileContextProvider: React.FC = ({
    children,
}): React.ReactElement => {
    const { userId } = useParams();

    const { data: user } = useQuery(["user", userId], () =>
        UsersService.get(userId as string)
    );

    return (
        <CurrentProfileContext.Provider
            value={{
                user,
            }}
        >
            {children}
        </CurrentProfileContext.Provider>
    );
};

export default CurrentProfileContextProvider;
