import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as HomeIcon } from "@icons/navigation/home.svg";
import { ReactComponent as ExploreIcon } from "@icons/navigation/explore.svg";
import { ReactComponent as NotificationIcon } from "@icons/navigation/notifications.svg";
import { ReactComponent as MessageIcon } from "@icons/navigation/messages.svg";
import { ReactComponent as BookmarkIcon } from "@icons/navigation/bookmark.svg";
import { ReactComponent as ListsIcon } from "@icons/navigation/lists.svg";
import { ReactComponent as ProfileIcon } from "@icons/navigation/profile.svg";
import { ReactComponent as MoreIcon } from "@icons/navigation/mode.svg";

import {
    SListItem,
    SListItemButton,
    SListItemText,
    SNavLink,
    SWrapper,
    STweetButton,
    SList,
    SListItemIcon,
    SIconButton,
    STwitterIcon,
} from "./Navigation.styled";
import { ProfileButton } from "./components";
import MoreMenuPopover from "./components/MoreMenuPopover";

interface IListItem {
    label: string;
    icon: React.ReactNode;
}
interface INavigationItem extends IListItem {
    to: string;
}

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
    { to: "/profile", icon: <ProfileIcon />, label: "Profile" },
];

const Navigation = () => {
    const moreButtonRef = React.useRef<HTMLDivElement | null>(null);
    const [moreMenuAnchor, setMoreMenuAnchor] =
        React.useState<HTMLDivElement | null>(null);

    const handleOpenMoreMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        setMoreMenuAnchor(e.currentTarget);
    };

    const handleCloseMoreMenu = () => {
        setMoreMenuAnchor(null);
    };

    return (
        <SWrapper>
            <SList>
                <Link
                    style={{ marginLeft: "12px", marginBottom: "20px" }}
                    to="/"
                >
                    <SIconButton color="primary">
                        <STwitterIcon />
                    </SIconButton>
                </Link>

                {navigationItems.map((navigationItem) => (
                    <SListItem>
                        <SNavLink to={navigationItem.to}>
                            <SListItemButton>
                                <SListItemIcon>
                                    {navigationItem.icon}
                                </SListItemIcon>
                                <SListItemText>
                                    {navigationItem.label}
                                </SListItemText>
                            </SListItemButton>
                        </SNavLink>
                    </SListItem>
                ))}

                <MoreMenuPopover
                    anchor={moreMenuAnchor}
                    onClose={handleCloseMoreMenu}
                    open={Boolean(moreMenuAnchor)}
                />

                <SListItem>
                    <div onClick={handleOpenMoreMenu} ref={moreButtonRef}>
                        <SListItemButton>
                            <SListItemIcon>
                                <MoreIcon />
                            </SListItemIcon>
                            <SListItemText>More</SListItemText>
                        </SListItemButton>
                    </div>
                </SListItem>

                <STweetButton>Tweet</STweetButton>
            </SList>

            <ProfileButton />
        </SWrapper>
    );
};

export default Navigation;
