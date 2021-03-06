import { IUser } from "_types/api/user";
import { RootState } from "@redux/store";

export const selectUserState = ({ user }: RootState) => user as IUser;
