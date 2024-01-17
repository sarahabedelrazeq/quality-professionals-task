import { User } from "@/interfaces";
import React from "react";

interface UserContextInterface {
  user: User[];
  userSetter?: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserContext = React.createContext({
  user: [],
} as UserContextInterface);

export default UserContext;
