import React from "react";
import SelectDialogMessage from "@pages/Messages/components/SelectDialogMessage";
import * as S from "./EmptyDialogPage.styled";

const EmptyDialogPage: React.FC = (): React.ReactElement => {
    return (
        <S.SContainer>
            <SelectDialogMessage />
        </S.SContainer>
    );
};

export default EmptyDialogPage;
