import DialogsService from "@services/DialogsService";
import DialogMessageService from "@services/DialogMessageService";

export type CreateMessage = (
    text: string
) => ReturnType<typeof DialogMessageService.create>;
export type GetMessages = () => ReturnType<typeof DialogMessageService.index>;
export type GetDialog = () => ReturnType<typeof DialogsService.get>;

interface UseDialogApiValue {
    createMessage: CreateMessage;
    getMessages: GetMessages;
    getDialog: GetDialog;
}

const useDialogApi = (dialogId: string): UseDialogApiValue => {
    const getDialog = () => DialogsService.get(dialogId);

    const createMessage: CreateMessage = (text) =>
        DialogMessageService.create({ text }, dialogId);

    const getMessages: GetMessages = () => DialogMessageService.index(dialogId);

    return { createMessage, getMessages, getDialog };
};

export default useDialogApi;
