import { DialogMessage } from "_types/api/dialog";
import { AdditionalDialogMessageRowProps } from "../DialogMessageRow";

export type IsPreviousUserTheSameProps = Pick<
    AdditionalDialogMessageRowProps,
    "messages" | "index"
> &
    Pick<DialogMessage, "author">;
