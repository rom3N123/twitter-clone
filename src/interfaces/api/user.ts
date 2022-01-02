import { FormikValues } from "formik";

export interface IUser extends FormikValues {
    _id: string;
    name: string;
    avatar: string;
    bio: string;
    location: string;
    birthTimestamp: number;
    tweets: number[];
    followers: number[];
    following: number[];
}

export type ProfileEditFields = Omit<
    IUser,
    "tweets" | "followers" | "following" | "nickname"
>;

export interface IUserRegisterValues
    extends Pick<IUser, "name" | "email" | "password" | "birthTimestamp"> {}

export interface IUserLoginValues extends Pick<IUser, "email" | "password"> {}
