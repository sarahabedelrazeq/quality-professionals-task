import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-emerald-900 text-white">
      <section className="px-4" style={{ maxWidth: 1000, width: "100%" }}>
        <div className="mb-12">
          <div
            className="bg-white rounded-full text-emerald-900 flex items-center justify-center"
            style={{ width: 100, height: 100 }}
          >
            <span className="block"> Logo </span>
          </div>
        </div>

        <div className="mb-2">
          <h1 className="text-4xl font-extrabold">Welcome Back!</h1>
        </div>

        <div className="mb-12">
          <p>choose your workspace to reach the box/</p>
        </div>

        <div className="rounded-t-lg bg-white shadow mb-4">
          <div className="rounded-t-lg bg-gray-100 text-emerald-900 p-4">
            <p>Work for abckumar@spbox.com</p>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <div
                  className="bg-violet-400 rounded-lg text-emerald-900 flex items-center justify-center"
                  style={{ width: 70, height: 70 }}
                >
                  <span className="block"> Logo </span>
                </div>

                <div className="text-black ">
                  <p> Workspace name</p>
                </div>
              </div>

              <div>
                <span className="bg-emerald-900 px-4 py-2">4 user</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end">
          <p>create a new workspace -&gt;</p>
        </div>

        <div className="rounded-lg bg-gray-100 shadow p-6 pt-8 text-black">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="block text-gray-700 font-bold text-2xl">
                Create New Workspace
              </p>
            </div>
            <div>x</div>
          </div>
          <div className="mb-5 rounded-lg bg-white p-4 pt-6">
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
          <div className="mb-5 rounded-lg bg-white p-4 pt-6">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="block text-gray-700 text-sm font-bold">Users</p>
                </div>
                <div>1/4</div>
              </div>
            </div>

            <div className="mb-4">
              <ul>
                <li className="rounded-lg bg-gray-100 shadow p-4 pt-6">
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
        </div>
      </section>
    </main>
  );
}
