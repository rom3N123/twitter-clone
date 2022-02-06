import React from "react";
import * as S from "./Messages.styled";
import PageHeader from "@components/PageComponents/PageHeader";
import InfoMessage from "@components/InfoMessage";
import useDialog from "@hooks/useDialog";
import SearchUsersDialog from "@components/Dialogs/SearchUsersDialog";
import DialogsService from "@services/DialogsService";
import { Dialog } from "@interfaces/api/dialog";
import MessageDialogItem from "./components/MessageDialogItem";

const Messages: React.FC = (): React.ReactElement => {
    const [dialog, setDialog] = React.useState(null);
    const [
        isSelectMessageDialogVisible,
        openSelectMessageDialog,
        closeSelectMessageDialog,
    ] = useDialog();

    const [dialogs, setDialogs] = React.useState<Dialog[]>([]);

    React.useEffect(() => {
        const fetchDialogs = async () => {
            const dialogs = await DialogsService.index();

            setDialogs(dialogs);
        };

        fetchDialogs();
    }, []);

    return (
        <S.SContainer>
            <SearchUsersDialog
                title="New Message"
                open={isSelectMessageDialogVisible}
                onClose={closeSelectMessageDialog}
            />
            <S.SConversatins>
                {dialogs.map(({ participants, messages, _id }) => (
                    <MessageDialogItem
                        key={_id}
                        user={participants[0]}
                        lastMessage={messages[messages.length - 1]}
                    />
                ))}
                {/* <PageHeader title="Messages" />
                <S.SConversationsInner>
                    <InfoMessage
                        title="Send a message, get a message"
                        subtitle="Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!"
                        button={{
                            title: "Start a conversation",
                            onClick: openSelectMessageDialog,
                        }}
                    />
                </S.SConversationsInner> */}
            </S.SConversatins>

            {dialog ? (
                <div>Dialog</div>
            ) : (
                <S.SSeleectDialogContainer>
                    <S.SConversationsInner>
                        <InfoMessage
                            title="Select Dialog"
                            subtitle="Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!"
                            button={{
                                title: "Select dialog",
                                onClick: openSelectMessageDialog,
                            }}
                        />
                    </S.SConversationsInner>
                </S.SSeleectDialogContainer>
            )}
        </S.SContainer>
    );
};

export default Messages;
