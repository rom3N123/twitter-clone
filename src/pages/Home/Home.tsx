import React from "react";
import TweetForm from "@components/TweetForm";
import PageHeader from "@components/PageComponents/PageHeader";
import { useQuery } from "react-query";
import HomeService from "@services/HomeService";
import Loader from "@pages/Layout/components/Loader";
import { STweetFormWrapper } from "./Home.styled";
import TweetsService from "@services/TweetsService";
import { IUser } from "@interfaces/api/user";
import { ITweet } from "@interfaces/api/tweet";
import HomeTweet from "./components/HomeTweet";
import styled from "styled-components";

import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List, VariableSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import useDynamicVirtualization from "@hooks/useDynamicVirtualization";

const SContainer = styled.div`
    width: 100%;
    height: 100%;
`;

interface TweetProps {
    index: number;
    style: object;
    data: {
        tweets: ITweet[];
    };
}

const Home: React.FC = (): React.ReactElement => {
    const { data, isLoading } = useQuery("home", HomeService.index);

    const onTweetFormSubmit = (text: string, user: IUser): Promise<ITweet> => {
        return TweetsService.create(user._id, { text });
    };

    const listRef = React.useRef() as React.RefObject<VariableSizeList<any>>;

    const { setRowHeight, getRowHeight } = useDynamicVirtualization(listRef);

    React.useEffect(() => {
        listRef.current?.resetAfterIndex(0);
    }, [data]);

    return (
        <section
            style={{ display: "flex", height: "100%", flexDirection: "column" }}
        >
            <div>
                <PageHeader title="Home" />

                <STweetFormWrapper>
                    <TweetForm onSubmit={onTweetFormSubmit} />
                </STweetFormWrapper>
            </div>

            <div style={{ flex: 1 }}>
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
            </div>
        </section>
    );
};

export default Home;
