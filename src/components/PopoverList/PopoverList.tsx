import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import * as S from "./PopoverList.styled";

export type IPopoverListItemColorType = "success" | "warning";

export interface IPopoverListItem {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    color?: IPopoverListItemColorType;
}

export interface IPopoverListProps {
    items: IPopoverListItem[];
    onPopoverClose: () => void;
}

const PopoverList: React.FC<IPopoverListProps> = ({
    items,
    onPopoverClose,
}): React.ReactElement => {
    const onItemClickHandler = (onClick: () => void) => () => {
        onClick();
        onPopoverClose();
    };

    return (
        <List>
            {items.map(({ icon, label, color, onClick }) => (
                <ListItemButton
                    key={label}
                    onClick={onItemClickHandler(onClick)}
                >
                    <S.SListItem>
                        <S.SListIcon>{icon}</S.SListIcon>
                        <S.SListItemText>{label}</S.SListItemText>
                    </S.SListItem>
                </ListItemButton>
            ))}
        </List>
    );
};

export default PopoverList;
