import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import * as S from "./PopoverList.styled";
import useItemsWithHocFunc from "@hooks/useItemsWithHocFunc";

export type IPopoverListItemColorType = "success" | "warning";

export interface IPopoverListItem {
    icon: React.ReactNode;
    label: string;
    onClick: (e: React.MouseEvent) => void;
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
    const onItemClickHandler =
        (onClick: (e: React.MouseEvent) => void) =>
        (e: React.MouseEvent): void => {
            e.stopPropagation();
            onClick(e);
            onPopoverClose();
        };

    const listItemsWithHocFunc = useItemsWithHocFunc(items, onItemClickHandler);

    return (
        <List>
            {listItemsWithHocFunc.map(({ icon, label, color, onClick }) => (
                <ListItemButton key={label} onClick={onClick}>
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
