import { AdditionalDialogMessageRowProps } from "../DialogMessageRow";

export type IsPreviousUserTheSameProps = Pick<
    AdditionalDialogMessageRowProps,
    "user" | "messages" | "index"
>;
