import $api from "@http/axios";
import { ITweet } from "@interfaces/api/tweet";

class HomeService {
    public async index(): Promise<ITweet[]> {
        const { data } = await $api.get<ITweet[]>("/home");

        return data;
    }
}

export default new HomeService();
