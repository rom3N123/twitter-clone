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

        this.setToken(token);

        return user;
    }

    public async loginByCredentials(
        credentials: IUserLoginValues
    ): Promise<IUser> {
        const {
            data: { user },
        } = await $api.post<IUserResponse>("/auth/login", credentials);

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

    private setToken(token: string): void {
        localStorage.setItem("token", token);
    }

    private deleteToken(): void {
        localStorage.removeItem("token");
    }
}

export default new AuthService();
