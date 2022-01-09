import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import TweetsService from "@services/TweetsService";
import TweetPageHeader from "./components/TweetPageHeader";
import UserItem from "@components/UserItem";
import * as S from "./TweetPage.styled";
import TweetThreeDotsButton from "@components/Tweet/components/TweetThreeDotsButton";
import Text from "@components/Text";
import { format } from "date-fns";
import TweetButtons from "@components/Tweet/components/TweetButtons";

const TweetPage: React.FC = (): React.ReactElement => {
    const { userId, tweetId } = useParams();

    const { data } = useQuery(["tweet", tweetId], () =>
        TweetsService.get(userId as string, tweetId as string)
    );

    return (
        <div>
            <TweetPageHeader />

            <S.SContent>
                {data && (
                    <>
                        <UserItem
                            avatarSize={48}
                            user={data.user}
                            endButton={
                                <TweetThreeDotsButton
                                    user={data.user}
                                    tweetId={data._id}
                                />
                            }
                        />

                        <S.STextContainer>
                            <Text fontSize={23} lh={28}>
                                {data.text}
                            </Text>
                        </S.STextContainer>

                        <Text color="gray">
                            {format(new Date(data.publishTimestamp), "PPPp")}
                        </Text>

                        <S.SButtonsContainer>
                            <TweetButtons
                                onReplyClick={() => {}}
                                onShareClick={() => {}}
                                onFavoriteClick={() => {}}
                                tweet={data}
                            />
                        </S.SButtonsContainer>
                    </>
                )}
            </S.SContent>
        </div>
    );
};

export default TweetPage;
