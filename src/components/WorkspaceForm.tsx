"use client";

import React from "react";
import CreateWorkspace from "./CreateWorkspace";
import WorkspaceContext from "@/store/workspaceContext";
import { Workspace } from "@/interfaces";

export default function WorkspaceForm({
  workspacesData,
}: {
  workspacesData: Workspace[];
}) {
  const [workspaces, setWorkspaces] = React.useState<Workspace[]>(workspacesData);

  return (
    <WorkspaceContext.Provider
      value={{
        workspaces: [],
        workspacesSetter: setWorkspaces,
      }}
    >
      <div>
        <div className="rounded-t-xl bg-white shadow mb-4">
          <div className="rounded-t-xl bg-gray-100 text-emerald-900 p-4">
            <p>Work for abckumar@spbox.com</p>
          </div>

          {workspaces?.map((item, index) => (
            <div className="p-4" key={index}>
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-4">
                  <div
                    className="bg-violet-400 rounded-xl text-emerald-900 flex items-center justify-center"
                    style={{ width: 70, height: 70 }}
                  >
                    <span className="block"> Logo </span>
                  </div>

                  <div className="text-black ">
                    <p>{item?.name}</p>
                  </div>
                </div>

                <div>
                  <span className="bg-emerald-900 px-4 py-2">
                    {item?.users?.length} user
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CreateWorkspace />
      </div>
    </WorkspaceContext.Provider>
  );
}
