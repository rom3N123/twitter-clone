import React from "react";
import TweetForm from "@components/TweetComponents/TweetForm";
import PageHeader from "@components/PageComponents/PageHeader";
import { useQuery } from "react-query";
import HomeService from "@services/HomeService";
import Loader from "@pages/Layout/components/Loader";
import { STweetFormWrapper } from "./Home.styled";
import TweetsService from "@services/TweetsService";
import { IUser } from "_types/api/user";
import { ITweet } from "_types/api/tweet";
import HomeTweet from "./components/HomeTweet";
import * as S from "./Home.styled";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List, VariableSizeList } from "react-window";
import useDynamicVirtualization from "@hooks/useDynamicVirtualization";

interface TweetProps {
    index: number;
    style: object;
    data: {
        tweets: ITweet[];
    };
}

const Home: React.FC = (): React.ReactElement => {
    const { data } = useQuery("home", HomeService.index);

    const onTweetFormSubmit = (text: string, user: IUser): Promise<ITweet> => {
        return TweetsService.create(user._id, { text });
    };

    const listRef = React.useRef() as React.RefObject<VariableSizeList<any>>;

    const { setRowHeight, getRowHeight } = useDynamicVirtualization(
        listRef,
        112
    );

    React.useEffect(() => {
        listRef.current?.resetAfterIndex(0);
    }, [data]);

    return (
        <S.SContainer>
            <header>
                <PageHeader title="Home" />

                <STweetFormWrapper>
                    <TweetForm onSubmit={onTweetFormSubmit} />
                </STweetFormWrapper>
            </header>

            <S.SListContainer>
                {data ? (
                    <AutoSizer>
                        {({ height, width }) => (
                            <List
                                ref={listRef}
                                width={width}
                                height={height}
                                itemCount={data.length}
                                itemSize={getRowHeight}
                                itemData={{ tweets: data, setRowHeight }}
                            >
                                {HomeTweet}
                            </List>
                        )}
                    </AutoSizer>
                ) : (
                    <Loader />
                )}
            </S.SListContainer>
        </S.SContainer>
    );
};

export default Home;
