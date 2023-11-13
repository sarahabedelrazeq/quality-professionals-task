"use client";
import React from "react";

export default function CreateWorkspace() {
  const [open, setOpen] = React.useState<boolean>(true);
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
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="block text-gray-700 font-bold text-2xl">
                  Create New Workspace
                </p>
              </div>
              <div>
                <button onClick={() => setOpen(false)}>X</button>
              </div>
            </div>

            <div className="mb-5 rounded-xl bg-white p-4 pt-6">
              <div className="mb-4">
                <p className="block text-gray-700 text-sm font-bold">
                  Workspace details
                </p>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold">
                  <div className="mb-2">Name</div>
                  <div>
                    <input
                      id="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Enter workspace name"
                    />
                  </div>
                </label>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold">
                  <div className="mb-2">Logo</div>
                  <div>
                    <input
                      id="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="file"
                      placeholder="Enter workspace name"
                    />
                  </div>
                </label>
              </div>
            </div>

            <div className="mb-5 rounded-xl bg-white p-4 pt-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="block text-gray-700 text-sm font-bold">
                      Users
                    </p>
                  </div>
                  <div>1/4</div>
                </div>
              </div>

              <div className="mb-4">
                <ul>
                  <li className="rounded-xl bg-gray-100 shadow p-4 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="block text-gray-700 text-sm font-bold">
                          Jason Bull
                        </p>
                        <p className="block text-gray-700 text-sm ">
                          bulljason@gmail.com
                        </p>
                      </div>
                      <div>
                        <button className=" text-decoration-underline">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold">
                  <div className="mb-2">Name</div>
                  <div>
                    <input
                      name="name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Enter user name"
                    />
                  </div>
                </label>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold">
                  <div className="mb-2">Email</div>
                  <div>
                    <input
                      name="email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Enter user Email"
                    />
                  </div>
                </label>
              </div>

              <div className="mb-4 flex items-center gap-3">
                <button className="rounded-full w-8 h-8 text-2xl border border-black">
                  <div className="flex justify-center items-center">
                    <div style={{ lineHeight: 1 }}>+</div>
                  </div>
                </button>
                <p className="block text-gray-700 text-sm font-bold">
                  Add another user
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3 md:gap-5 items-center">
              <div>
                <button className="text-sm">Cancel</button>
              </div>
              <div>
                <button className="py-3 px-4 bg-emerald-900 text-white rounded-3xl">
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
