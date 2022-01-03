import $api from "@http/axios";
import { IUser } from "@interfaces/api/user";

class UsersService {
    public async findById(id: string): Promise<IUser> {
        const { data } = await $api.get<IUser>(`/users/${id}`);

        return data;
    }
}

export default new UsersService();
