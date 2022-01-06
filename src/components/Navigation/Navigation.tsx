import React from "react";
import { ReactComponent as HomeIcon } from "@icons/navigation/home.svg";
import { ReactComponent as ExploreIcon } from "@icons/navigation/explore.svg";
import { ReactComponent as NotificationIcon } from "@icons/navigation/notifications.svg";
import { ReactComponent as MessageIcon } from "@icons/navigation/messages.svg";
import { ReactComponent as BookmarkIcon } from "@icons/navigation/bookmark.svg";
import { ReactComponent as ListsIcon } from "@icons/navigation/lists.svg";
import { ReactComponent as ProfileIcon } from "@icons/navigation/profile.svg";
import { ReactComponent as MoreIcon } from "@icons/navigation/mode.svg";
import ProfileButton from "./components/ProfileButton";
import MoreMenuPopover from "./components/MoreMenuPopover";
import usePopover from "@hooks/usePopover";
import S from "./Navigation.styled";
import { useAppSelector } from "@redux/hooks";
import { selectUserState } from "@redux/ducks/user";

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
        { to: `/${_id}`, icon: <ProfileIcon />, label: "Profile" },
    ];

    return (
        <S.Container>
            <S.NavigationList>
                <S.STwitterIconLink to="/">
                    <S.STwitterIconButton>
                        <S.STwitterIcon />
                    </S.STwitterIconButton>
                </S.STwitterIconLink>

                {navigationItems.map(({ icon, to, label }) => (
                    <S.NavigationItem key={to}>
                        <S.Link to={to}>
                            <S.NavigationItemButton>
                                <S.NavigationItemIcon>
                                    {icon}
                                </S.NavigationItemIcon>
                                <S.NavigationItemText>
                                    {label}
                                </S.NavigationItemText>
                            </S.NavigationItemButton>
                        </S.Link>
                    </S.NavigationItem>
                ))}

                <MoreMenuPopover
                    anchor={anchor}
                    onClose={closePopover}
                    open={Boolean(anchor)}
                />

                <S.NavigationItem onClick={openPopover}>
                    <S.NavigationItemButton>
                        <S.NavigationItemIcon>
                            <MoreIcon />
                        </S.NavigationItemIcon>
                        <S.NavigationItemText>More</S.NavigationItemText>
                    </S.NavigationItemButton>
                </S.NavigationItem>

                <S.TweetButton>Tweet</S.TweetButton>
            </S.NavigationList>

            <ProfileButton />
        </S.Container>
    );
};

export default Navigation;
