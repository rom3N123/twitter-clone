import $api from "@http/axios";
import ModelService from "./core/ModelService";
import { ITweet, ITweetEditableFields } from "./../interfaces/api/tweet";

class TweetsService extends ModelService<ITweet> {
    public async index(userId: string): Promise<ITweet[]> {
        const { data } = await $api.get<ITweet[]>(`/users/${userId}/tweets`);

        return data;
    }

    public async get(userId: string, tweetId: string): Promise<ITweet> {
        const { data } = await $api.get<ITweet>(
            `/users/${userId}/tweets/${tweetId}`
        );

        return data;
    }

    public async delete(userId: string, tweetId: string): Promise<void> {
        $api.delete(`/users/${userId}/tweets/${tweetId}`);
    }

    public async update(
        fields: ITweetEditableFields,
        userId: string,
        tweetId: string
    ): Promise<ITweet> {
        const { data } = await $api.patch<ITweet>(
            `/users/${userId}/tweets/${tweetId}`,
            fields
        );

        return data;
    }
}

export default new TweetsService();
