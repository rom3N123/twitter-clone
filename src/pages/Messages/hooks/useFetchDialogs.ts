import React from "react";
import { Dialog } from "_types/api/dialog";
import DialogsService from "@services/DialogsService";

const useFetchDialogs = (): Dialog[] => {
    const [dialogs, setDialogs] = React.useState<Dialog[]>([]);

    React.useEffect(() => {
        const fetchDialogs = async () => {
            const dialogs = await DialogsService.index();

            setDialogs(dialogs);
        };

        fetchDialogs();
    }, []);

    return dialogs;
};

export default useFetchDialogs;
