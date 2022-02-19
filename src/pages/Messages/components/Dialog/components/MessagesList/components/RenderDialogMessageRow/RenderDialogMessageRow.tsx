import React from "react";
import { selectUserState } from "@redux/ducks/user";
import { useAppSelector } from "@redux/hooks";
import { ListChildComponentProps } from "react-window";
import { DialogMessage } from "_types/api/dialog";
import DialogMessageRow from "../../../DialogMessageRow";
import { SetRowHeight } from "@hooks/useDynamicVirtualization";

export interface RenderDialogMessageRowItemData {
    messages: DialogMessage[];
    setRowHeight: SetRowHeight;
}

interface RenderDialogMessageRowProps
    extends ListChildComponentProps<RenderDialogMessageRowItemData> {}

const RenderDialogMessageRow: React.FC<RenderDialogMessageRowProps> = ({
    data: { messages, setRowHeight },
    index,
    style,
}): React.ReactElement => {
    const authUser = useAppSelector(selectUserState);
    const message: DialogMessage = messages[index];
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (ref.current) {
            setRowHeight(index, ref.current.clientHeight + 5);
        }
    }, []);

    return (
        <DialogMessageRow
            containerRef={ref}
            key={message._id}
            index={index}
            messages={messages}
            isMine={message.author._id === authUser._id}
            message={message}
            style={style}
        />
    );
};

export default RenderDialogMessageRow;
