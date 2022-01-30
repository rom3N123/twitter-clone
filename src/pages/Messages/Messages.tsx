import React from "react";
import * as S from "./Messages.styled";
import PageHeader from "@components/PageComponents/PageHeader";
import InfoMessage from "@components/InfoMessage";
import MessageDialogItem from "./components/MessageDialogItem";

const Messages: React.FC = (): React.ReactElement => {
    const [dialog, setDialog] = React.useState(null);

    return (
        <S.SContainer>
            <S.SConversatins>
                <PageHeader title="Messages" />
                <S.SConversationsInner>
                    <InfoMessage
                        title="Send a message, get a message"
                        subtitle="Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!"
                        button={{
                            title: "Start a conversation",
                            onClick: () => {},
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
                                onClick: () => {},
                            }}
                        />
                    </S.SConversationsInner>
                </S.SSeleectDialogContainer>
            )}
        </S.SContainer>
    );
};

export default Messages;
