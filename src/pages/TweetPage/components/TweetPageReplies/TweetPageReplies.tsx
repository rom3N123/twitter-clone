import React from "react";
import Loader from "@pages/Layout/components/Loader";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as S from "./TweetPageReplies.styled";
import RepliesService from "@services/RepliesService";
import Reply from "@components/ReplyComponents/Reply";

const TweetPageReplies: React.FC = (): React.ReactElement => {
    const { userId, tweetId } = useParams();

    const { data } = useQuery(["replies", tweetId], () =>
        RepliesService.index(userId as string, tweetId as string)
    );

    return (
        <S.SContainer>
            {data ? (
                <>
                    {data.map((reply) => (
                        <Reply key={reply._id} tweet={reply} />
                    ))}
                </>
            ) : (
                <Loader />
            )}
        </S.SContainer>
    );
};

export default TweetPageReplies;
