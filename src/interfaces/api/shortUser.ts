import { IUser } from "./user";

export type ShortProfile = Pick<IUser, "_id" | "nickname" | "avatar" | "bio">;
