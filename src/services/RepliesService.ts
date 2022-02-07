import $api from "@http/axios";
import { ITweet } from "@types/api/tweet";

class RepliesService {
    public async index(userId: string, tweetId: string): Promise<ITweet[]> {
        const { data } = await $api.get<ITweet[]>(
            `/users/${userId}/tweets/${tweetId}/replies`
        );

        return data;
    }

    public async create(
        userId: string,
        tweetId: string,
        text: string
    ): Promise<ITweet> {
        const { data } = await $api.post<ITweet>(
            `/users/${userId}/tweets/${tweetId}/replies`,
            {
                text,
            }
        );

        return data;
    }

    public async delete(
        userId: string,
        tweetId: string,
        replyId: string
    ): Promise<void> {
        return $api.delete(
            `/users/${userId}/tweets/${tweetId}/replies/${replyId}`
        );
    }
}

export default new RepliesService();
