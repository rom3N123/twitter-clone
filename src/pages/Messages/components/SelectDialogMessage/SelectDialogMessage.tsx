import React from "react";
import InfoMessage from "@components/MessagesComponents/InfoMessage";
import useDialog from "@hooks/useDialog";
import SearchUsersDialog from "@components/Dialogs/SearchUsersDialog";

const SelectDialogMessage: React.FC = (): React.ReactElement => {
    const [
        isSelectMessageDialogVisible,
        openSelectMessageDialog,
        closeSelectMessageDialog,
    ] = useDialog();

    return (
        <>
            <InfoMessage
                title="Send a message, get a message"
                subtitle="Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!"
                button={{
                    title: "Start a conversation",
                    onClick: openSelectMessageDialog,
                }}
            />

            <SearchUsersDialog
                title="New Message"
                open={isSelectMessageDialogVisible}
                onClose={closeSelectMessageDialog}
            />
        </>
    );
};

export default SelectDialogMessage;
