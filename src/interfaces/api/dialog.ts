import { IUser } from "@interfaces/api/user";

export interface Dialog {
    _id: string;
    messages: DialogMessage[];
    participants: IUser[];
    creator: IUser;
}

export interface DialogMessage {
    _id: string;
    text: string;
    isEdited: boolean;
    createdAt: number;
    replyTo: DialogMessage;
    isSystem: boolean;
    dialog: Dialog;
    author: IUser;
}
