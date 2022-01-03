import $api from "@http/axios";
import {
    IUser,
    IUserLoginValues,
    IUserRegisterValues,
} from "@interfaces/api/user";
import {
    IUserWithTokenResponse,
    IUserResponse,
} from "@interfaces/api/responses";

class AuthService {
    public async register(registerValues: IUserRegisterValues): Promise<IUser> {
        const {
            data: { user, token },
        } = await $api.post<IUserWithTokenResponse>(
            "/auth/register",
            registerValues
        );

        localStorage.setItem("token", token);

        return user;
    }

    public async loginByCredentials(
        credentials: IUserLoginValues
    ): Promise<IUser> {
        const {
            data: { user, token },
        } = await $api.post<IUserWithTokenResponse>("/auth/login", credentials);

        localStorage.setItem("token", token);

        return user;
    }

    public async loginByToken(): Promise<IUser> {
        const {
            data: { user },
        } = await $api.get<IUserResponse>("/auth/login");

        return user;
    }

    public logout(): void {
        this.deleteToken();
    }

    public deleteToken(): void {
        localStorage.removeItem("token");
    }
}

export default new AuthService();
