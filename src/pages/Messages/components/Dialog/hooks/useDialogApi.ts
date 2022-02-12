import DialogMessageService from "@services/DialogMessageService";

export type CreateMessage = (
    text: string
) => ReturnType<typeof DialogMessageService.create>;
export type GetMessages = () => ReturnType<typeof DialogMessageService.index>;

interface UseDialogApiValue {
    createMessage: CreateMessage;
    getMessages: GetMessages;
}

const useDialogApi = (dialogId: string): UseDialogApiValue => {
    const createMessage: CreateMessage = (text) =>
        DialogMessageService.create({ text }, dialogId);

    const getMessages: GetMessages = () => DialogMessageService.index(dialogId);

    return { createMessage, getMessages };
};

export default useDialogApi;
