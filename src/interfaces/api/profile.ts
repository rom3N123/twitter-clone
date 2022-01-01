import { FormikValues } from "formik";

export interface IProfile extends FormikValues {
    name: string;
    avatar: string;
    bio: string;
    location: string;
    tweets: number[];
    followers: number[];
    following: number[];
}

export type ProfileEditFields = Omit<
    IProfile,
    "tweets" | "followers" | "following" | "nickname"
>;

export interface IApiProfile extends IProfile {
    id: number;
    userId: number;
}
