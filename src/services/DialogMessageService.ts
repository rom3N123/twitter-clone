import $api from "@http/axios";
import ModelService from "./core/ModelService";
import {
    DialogMessage,
    DialogMessageEditableFields,
    DialogMessageCreateFields,
} from "_types/api/dialog";

class DialogMessageService extends ModelService<DialogMessage> {
    private getDialogUrl(dialogId: string) {
        return `dialogs/${dialogId}`;
    }

    private getMessagesUrl(dialogId: string, messageId?: string) {
        let url = `${this.getDialogUrl(dialogId)}/messages`;

        if (messageId) {
            url += `/${messageId}`;
        }

        return url;
    }

    public async index(dialogId: string) {
        const { data } = await $api.get(this.getMessagesUrl(dialogId));

        return data;
    }

    public async update(
        payload: DialogMessageEditableFields,
        dialogId: string,
        messageId: string
    ) {
        const { data } = await $api.patch(
            this.getMessagesUrl(dialogId, messageId),
            payload
        );

        return data;
    }

    public async create(payload: DialogMessageCreateFields, dialogId: string) {
        const { data } = await $api.post(
            this.getMessagesUrl(dialogId),
            payload
        );

        return data;
    }
}

export default new DialogMessageService();
