import useDynamicVirtualization from "@hooks/useDynamicVirtualization";
import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList as List } from "react-window";
import { Messages } from "../../hooks/useFetchDialogMessages";
import RenderDialogMessageRow from "./components/RenderDialogMessageRow";
import styled from "styled-components";
import { styledScrollbar } from "@styled/styles";

const ReversedElement = styled.div`
    transform: scaleY(-1);
    padding: 10px 0;
    ${styledScrollbar};
`;

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

    const { setRowHeight, getRowHeight } = useDynamicVirtualization(
        listRef,
        58
    );

    React.useImperativeHandle(ref, () => ({
        resetListHeight: () => {
            listRef.current?.resetAfterIndex(0);
        },
    }));

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
                    outerElementType={ReversedElement}
                    innerElementType={ReversedElement}
                    layout="vertical"
                >
                    {RenderDialogMessageRow}
                </List>
            )}
        </AutoSizer>
    );
});

export default MessagesList;
