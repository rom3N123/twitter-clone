import { IApiProfile } from "./profile";

export type ShortProfile = Omit<
    IApiProfile,
    "tweets" | "following" | "followers" | "userId"
>;
