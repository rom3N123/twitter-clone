import React from "react";
import * as S from "./Searchbar.styled";
import { ReactComponent as LoupeSvg } from "@icons/loupe.svg";

const Searchbar: React.FC = (): React.ReactElement => {
    return (
        <S.SContainer>
            <LoupeSvg />
        </S.SContainer>
    );
};

export default Searchbar;
