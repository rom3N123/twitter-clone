import $api from "@http/axios";
import { IUser, IUserLoginValues, IUserRegisterValues } from "_types/api/user";
import {
    IUserWithTokenResponse,
    IUserResponse,
    ITokenResponse,
} from "_types/api/responses";
import { AxiosResponse } from "axios";

class AuthService {
    public static async register(
        registerValues: IUserRegisterValues
    ): Promise<IUser> {
        const {
            data: { user, token },
        } = await $api.post<IUserWithTokenResponse>(
            "/auth/register",
            registerValues
        );

        localStorage.setItem("token", token);

        return user;
    }

    public static async loginByCredentials(
        credentials: IUserLoginValues
    ): Promise<IUser> {
        const {
            data: { user, token },
        } = await $api.post<IUserWithTokenResponse>("/auth/login", credentials);

        localStorage.setItem("token", token);

        return user;
    }

    public static async loginByToken(): Promise<IUser> {
        const {
            data: { user },
        } = await $api.get<IUserResponse>("/auth/login");

        return user;
    }

    public static async logout(): Promise<AxiosResponse> {
        const response = await $api.get("/auth/logout");
        AuthService.deleteToken();
        return response;
    }

    public static async deleteToken(): Promise<void> {
        localStorage.removeItem("token");
    }

    public static async refreshToken(): Promise<string> {
        const {
            data: { token },
        } = await $api.get<ITokenResponse>("/auth/refresh");

        return token;
    }
}

export default AuthService;
