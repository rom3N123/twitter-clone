import DialogsService from "@services/DialogsService";
import { useQuery } from "react-query";
import { Dialog } from "_types/api/dialog";

type UseFetchDialogsValue = {
    dialogs: Dialog[];
    isLoading: boolean;
};

const useFetchDialogs = (): UseFetchDialogsValue => {
    const { data, isLoading } = useQuery(["dialogs"], () =>
        DialogsService.index()
    );

    return { dialogs: data || [], isLoading };
};

export default useFetchDialogs;
