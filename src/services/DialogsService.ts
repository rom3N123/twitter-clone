import ModelService from "./core/ModelService";
import { Dialog } from "_types/api/dialog";
import $api from "@http/axios";

class DialogService extends ModelService<Dialog> {
    async index() {
        const { data } = await $api.get("/dialogs");

        return data;
    }

    async get(dialogId: string) {
        const { data } = await $api.get<Dialog>(`/dialogs/${dialogId}`);

        return data;
    }

    async update(dialogId: string) {
        const { data } = await $api.patch(`/dialogs/${dialogId}`);

        return data;
    }

    async delete(dialogId: string): Promise<void> {
        return $api.delete(`/dialogs/${dialogId}`);
    }
}

export default new DialogService();
