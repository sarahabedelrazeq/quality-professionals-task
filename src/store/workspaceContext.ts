import { Workspace } from "@/interfaces";
import React from "react";

interface WorkspaceContextInterface {
  workspaces: Workspace[];
  workspacesSetter?: React.Dispatch<React.SetStateAction<Workspace[]>>;
}

const WorkspaceContext = React.createContext({
  workspaces: [],
} as WorkspaceContextInterface);

export default WorkspaceContext;
