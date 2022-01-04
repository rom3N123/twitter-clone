import $api from "@http/axios";
import { IUser, IUserEditableFields } from "@interfaces/api/user";
import ModelService from "./core/ModelService";

class UsersService extends ModelService<IUser> {
    public async get(id: string): Promise<IUser> {
        const { data } = await $api.get<IUser>(`/users/${id}`);

        return data;
    }

    public async update(
        fields: IUserEditableFields,
        userId: string
    ): Promise<IUser> {
        const { data } = await $api.patch<IUser>(`/users/${userId}`, fields);

        return data;
    }
}

export default new UsersService();
