import React from "react";
import * as S from "./Messages.styled";
import MessageDialogItem from "./components/MessageDialogItem";
import useFetchDialogs from "./useFetchDialogs";
import SelectDialogMessage from "./components/SelectDialogMessage";

const Messages: React.FC = (): React.ReactElement => {
    const [dialog, setDialog] = React.useState(null);

    const dialogs = useFetchDialogs();

    return (
        <S.SContainer>
            <S.SConversatins>
                {!dialogs.length ? (
                    <SelectDialogMessage />
                ) : (
                    dialogs.map(({ participants, messages, _id }) => (
                        <MessageDialogItem
                            key={_id}
                            user={participants[0]}
                            lastMessage={messages[messages.length - 1]}
                        />
                    ))
                )}
            </S.SConversatins>

            {dialog ? (
                <div>Dialog</div>
            ) : (
                <S.SSeleectDialogContainer>
                    <S.SConversationsInner>
                        <SelectDialogMessage />
                    </S.SConversationsInner>
                </S.SSeleectDialogContainer>
            )}
        </S.SContainer>
    );
};

export default Messages;
