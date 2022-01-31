import React from "react";
import { IUser } from "@interfaces/api/user";
import List from "@mui/material/List";
import UserBadge from "@components/UserBadge";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

export interface UsersListProps {
    users: IUser[];
}

const UsersList: React.FC<UsersListProps> = ({ users }): React.ReactElement => {
    return (
        <List>
            {users.map((user) => (
                <ListItem key={user._id}>
                    <ListItemButton>
                        <UserBadge
                            withoutUserProfilePopover
                            fontSize={16}
                            avatarSize={50}
                            user={user}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default UsersList;
