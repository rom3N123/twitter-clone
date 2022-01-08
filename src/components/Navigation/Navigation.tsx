import React from "react";
import { ReactComponent as HomeIcon } from "@icons/navigation/home.svg";
import { ReactComponent as ExploreIcon } from "@icons/navigation/explore.svg";
import { ReactComponent as NotificationIcon } from "@icons/navigation/notifications.svg";
import { ReactComponent as MessageIcon } from "@icons/navigation/messages.svg";
import { ReactComponent as BookmarkIcon } from "@icons/navigation/bookmark.svg";
import { ReactComponent as ListsIcon } from "@icons/navigation/lists.svg";
import { ReactComponent as ProfileIcon } from "@icons/navigation/profile.svg";
import { ReactComponent as MoreIcon } from "@icons/navigation/mode.svg";
import { ReactComponent as AddSvgIcon } from "@icons/navigation/add.svg";
import ProfileButton from "./components/ProfileButton";
import MoreMenuPopover from "./components/MoreMenuPopover";
import usePopover from "@hooks/usePopover";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";
import { useMediaQuery } from "@mui/material";
import * as S from "./Navigation.styled";

interface IListItem {
    label: string;
    icon: React.ReactNode;
}
interface INavigationItem extends IListItem {
    to: string;
}

const Navigation = () => {
    const { anchor, openPopover, closePopover } = usePopover<HTMLDivElement>();

    const { _id } = useAppSelector(selectUserState);

    const navigationItems: INavigationItem[] = [
        { to: "/", icon: <HomeIcon />, label: "Home" },
        { to: "/explore", icon: <ExploreIcon />, label: "Explore" },
        {
            to: "/notifications",
            icon: <NotificationIcon />,
            label: "Notifications",
        },
        { to: "/messages", icon: <MessageIcon />, label: "Messages" },
        { to: "/bookmarks", icon: <BookmarkIcon />, label: "Bookmarks" },
        { to: "/lists", icon: <ListsIcon />, label: "Lists" },
        {
            to: `/${_id}`,
            icon: <ProfileIcon />,
            label: "Profile",
        },
    ];

    const tabletMediaQuery = useMediaQuery("(max-width: 1100px)");

    return (
        <S.SContainer>
            <S.SNavigationList>
                <S.SNavigationItem>
                    <S.SLink to="/">
                        <S.SNavigationItemButton>
                            <S.SNavigationItemIcon>
                                <S.STwitterIcon />
                            </S.SNavigationItemIcon>
                        </S.SNavigationItemButton>
                    </S.SLink>
                </S.SNavigationItem>

                {navigationItems.map(({ icon, to, label }) => (
                    <S.SNavigationItem key={to}>
                        <S.SLink to={to}>
                            <S.SNavigationItemButton>
                                <S.SNavigationItemIcon>
                                    {icon}
                                </S.SNavigationItemIcon>
                                {!tabletMediaQuery && (
                                    <S.SNavigationItemText>
                                        {label}
                                    </S.SNavigationItemText>
                                )}
                            </S.SNavigationItemButton>
                        </S.SLink>
                    </S.SNavigationItem>
                ))}

                <MoreMenuPopover
                    anchor={anchor}
                    onClose={closePopover}
                    open={Boolean(anchor)}
                />

                <S.SNavigationItem onClick={openPopover}>
                    <S.SNavigationItemButton>
                        <S.SNavigationItemIcon>
                            <MoreIcon />
                        </S.SNavigationItemIcon>
                        {!tabletMediaQuery && (
                            <S.SNavigationItemText>More</S.SNavigationItemText>
                        )}
                    </S.SNavigationItemButton>
                </S.SNavigationItem>

                <S.STweetButton>
                    {tabletMediaQuery ? (
                        <AddSvgIcon style={{ width: "24px" }} />
                    ) : (
                        "Tweet"
                    )}
                </S.STweetButton>
            </S.SNavigationList>

            <ProfileButton />
        </S.SContainer>
    );
};

export default Navigation;
