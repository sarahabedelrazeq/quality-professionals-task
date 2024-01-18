"use client";
import fetchAPI from "@/helpers/fetchAPI";
import { User } from "@/interfaces";
import WorkspaceContext from "@/store/workspaceContext";
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function CreateWorkspace({
  currentUserData,
}: {
  currentUserData: User;
}) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [userFormData, setUserFormData] = React.useState<{
    name?: string;
    email?: string;
  }>({});
  const [users, setUsers] = React.useState<User[]>([currentUserData]);
  const [workspaceFormData, setWorkspaceFormData] = React.useState<{
    name?: string;
    logo?: string;
  }>({});
  const { workspacesSetter } = React.useContext(WorkspaceContext);

  return (
    <div>
      <div className="text-end">
        <button onClick={() => setOpen((pre) => !pre)}>
          create a new workspace -&gt;
        </button>
      </div>

      {open && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bg-black/75 w-screen h-screen"
            onClick={() => setOpen(false)}
          ></div>
          <div
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="fixed md:rounded-xl w-full h-full md:w-fit md:h-fit max-h-full overflow-y-auto bg-gray-100 shadow-2xl p-6 pt-8 text-black"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="block text-gray-700 font-bold text-2xl">
                  Create New Workspace
                </p>
              </div>
              <div>
                <button onClick={() => setOpen(false)}>X</button>
              </div>
            </div>

            <div className="mb-4 rounded-xl bg-white p-4 pt-6">
              <div className="mb-3">
                <p className="block text-gray-700 text-sm font-bold">
                  Workspace details
                </p>
              </div>

              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold">
                  <div className="mb-2">Name</div>
                  <div>
                    <input
                      id="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Enter workspace name"
                      value={workspaceFormData.name || ""}
                      onChange={(event) =>
                        setWorkspaceFormData((pre) => ({
                          ...pre,
                          name: event?.target?.value,
                        }))
                      }
                    />
                  </div>
                </label>
              </div>

              <div className="mb-3">
                <label className="block text-gray-700 text-sm font-bold">
                  <div className="mb-2">Logo</div>
                  <div>
                    <input
                      id="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="file"
                      placeholder="Enter workspace name"
                      value={workspaceFormData.logo || ""}
                      onChange={(event) => {
                        setWorkspaceFormData((pre) => ({
                          ...pre,
                          logo: event?.target?.value,
                        }));
                      }}
                    />
                  </div>
                </label>
              </div>
            </div>

            <div className="mb-4 rounded-xl bg-white p-4 pt-6">
              <div className="mb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="block text-gray-700 text-sm font-bold">
                      Users
                    </p>
                  </div>
                  <div>{users?.length}/4</div>
                </div>
              </div>

              <div className="mb-3">
                <ul>
                  {users?.map((item) => (
                    <li
                      className="rounded-xl bg-gray-100 shadow p-4 pt-6 mb-2"
                      key={item.id}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="block text-gray-700 text-sm font-bold">
                            {item?.name}
                          </p>
                          <p className="block text-gray-700 text-sm ">
                            {item.email}
                          </p>
                        </div>
                        <div>
                          <button
                            onClick={() =>
                              setUsers((pre) =>
                                pre?.filter(
                                  (filterItem) => !(filterItem?.id === item?.id)
                                )
                              )
                            }
                            className="text-decoration-underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {users?.length < 4 && (
                <>
                  <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold">
                      <div className="mb-2">Name</div>
                      <div>
                        <input
                          name="name"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="Enter user name"
                          value={userFormData.name || ""}
                          onChange={(event) =>
                            setUserFormData((pre) => ({
                              ...pre,
                              name: event?.target?.value,
                            }))
                          }
                        />
                      </div>
                    </label>
                  </div>

                  <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-bold">
                      <div className="mb-2">Email</div>
                      <div>
                        <input
                          name="email"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="email"
                          placeholder="Enter user Email"
                          value={userFormData.email || ""}
                          onChange={(event) =>
                            setUserFormData((pre) => ({
                              ...pre,
                              email: event?.target?.value,
                            }))
                          }
                        />
                      </div>
                    </label>
                  </div>

                  <div className="mb-3 flex items-center gap-3">
                    <button
                      onClick={() => {
                        if (userFormData?.name && userFormData?.email) {
                          setUsers((pre) => [
                            ...pre,
                            {
                              id: pre[pre?.length - 1]
                                ? pre[pre?.length - 1].id + 1
                                : 1,
                              name: userFormData?.name || "",
                              email: userFormData?.email || "",
                            },
                          ]);

                          setUserFormData({});
                        }
                      }}
                      className={`rounded-full w-8 h-8 text-2xl border border-black ${
                        !userFormData?.name ||
                        !userFormData?.email ||
                        users?.length >= 4
                          ? "border-gray-400 text-gray-400"
                          : ""
                      }`}
                      disabled={
                        !userFormData?.name ||
                        !userFormData?.email ||
                        users?.length >= 4
                      }
                    >
                      <div className="flex justify-center items-center">
                        <div style={{ lineHeight: 1 }}>+</div>
                      </div>
                    </button>
                    <p className="block text-gray-700 text-sm font-bold">
                      Add another user
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-end gap-3 md:gap-5 items-center">
              <div>
                <button className="text-sm" onClick={() => setOpen(false)}>
                  Cancel
                </button>
              </div>
              <div>
                <button
                  className="py-3 px-4 bg-emerald-900 text-white rounded-3xl"
                  onClick={() => {
                    fetchAPI(
                      "workspaces",
                      JSON.stringify({
                        ...workspaceFormData,
                        users: users,
                      }),
                      "POST"
                    ).then((response) => {
                      if (response?.status === 200 && workspacesSetter) {
                        workspacesSetter((pre) => [
                          ...pre,
                          {
                            ...workspaceFormData,
                            users: users,
                          },
                        ]);
                        setOpen(false);
                      } else if (response?.message) {
                        MySwal.fire({
                          icon: "error",
                          title: response?.message,
                        });
                      }
                    });
                  }}
                >
                  Submit Workspace
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
