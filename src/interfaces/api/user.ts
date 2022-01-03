import { FormikValues } from "formik";

export interface IUser extends FormikValues {
    _id: string;
    name: string;
    avatar: string;
    background: string;
    bio: string;
    location: string;
    birthTimestamp: number;
    tweets: number[];
    followers: number[];
    following: number[];
}

export interface IUserRegisterValues
    extends Pick<IUser, "name" | "email" | "password" | "birthTimestamp"> {}

export interface IUserLoginValues extends Pick<IUser, "email" | "password"> {}

export interface IUserEditableFields extends Omit<IUser, "_id"> {}
