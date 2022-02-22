import useDynamicVirtualization from "@hooks/useDynamicVirtualization";
import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";
import { Messages } from "../../hooks/useFetchDialogMessages";
import RenderDialogMessageRow from "./components/RenderDialogMessageRow";
import * as S from "./MessagesList.styled";

interface MessagesListProps {
    messages: Messages;
}

export interface MessagesListRefMethods {
    resetListHeight: List["resetAfterIndex"];
}

const MessagesList = React.forwardRef<
    MessagesListRefMethods,
    MessagesListProps
>(({ messages }, ref): React.ReactElement => {
    const listRef = React.useRef(null) as React.RefObject<List<any>>;
    const [outerRef, setOuterRef] = React.useState<HTMLElement | null>(null);

    const { setRowHeight, getRowHeight } = useDynamicVirtualization(
        listRef,
        58
    );

    React.useImperativeHandle(ref, () => ({
        resetListHeight: () => {
            listRef.current?.resetAfterIndex(0);
        },
    }));

    const getOuterRef = (node: HTMLElement) => {
        setOuterRef(node);
        return node;
    };

    React.useEffect(() => {
        const onScroll = (event: any) => {
            console.log(event);
        };

        outerRef?.addEventListener("scroll", onScroll);

        return () => {
            outerRef?.removeEventListener("scroll", onScroll);
        };
    }, [outerRef]);

    return (
        <AutoSizer>
            {({ width, height }) => (
                <List
                    ref={listRef}
                    width={width}
                    height={height}
                    itemCount={messages.length}
                    itemSize={getRowHeight}
                    itemData={{ messages, setRowHeight }}
                    outerElementType={S.SReversedList}
                    innerElementType={S.SReversedElement}
                    outerRef={getOuterRef}
                    layout="vertical"
                >
                    {RenderDialogMessageRow}
                </List>
            )}
        </AutoSizer>
    );
});

export default MessagesList;
