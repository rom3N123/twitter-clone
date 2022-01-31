import React from "react";
import * as S from "./Messages.styled";
import PageHeader from "@components/PageComponents/PageHeader";
import InfoMessage from "@components/InfoMessage";
import useDialog from "@hooks/useDialog";
import SearchUsersDialog from "@components/Dialogs/SearchUsersDialog";

const Messages: React.FC = (): React.ReactElement => {
    const [dialog, setDialog] = React.useState(null);
    const [
        isSelectMessageDialogVisible,
        openSelectMessageDialog,
        closeSelectMessageDialog,
    ] = useDialog();

    return (
        <S.SContainer>
            <SearchUsersDialog
                title="New Message"
                open={isSelectMessageDialogVisible}
                onClose={closeSelectMessageDialog}
            />
            <S.SConversatins>
                <PageHeader title="Messages" />
                <S.SConversationsInner>
                    <InfoMessage
                        title="Send a message, get a message"
                        subtitle="Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!"
                        button={{
                            title: "Start a conversation",
                            onClick: openSelectMessageDialog,
                        }}
                    />
                </S.SConversationsInner>
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
