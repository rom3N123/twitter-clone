import $api from "@http/axios";
import { IUser, IUserEditableFields } from "@interfaces/api/user";

class UsersService {
    public async findById(id: string): Promise<IUser> {
        const { data } = await $api.get<IUser>(`/users/${id}`);

        return data;
    }

    public async update(
        id: string,
        fields: IUserEditableFields
    ): Promise<IUser> {
        const { data } = await $api.patch<IUser>(`/users/${id}`, fields);

        return data;
    }
}

export default new UsersService();
