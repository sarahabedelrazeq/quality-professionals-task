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
          <h1 className="text-4xl font-extrabold	">Welcome Back!</h1>
        </div>

        <div className="mb-12">
          <p>choose your workspace to reach the box/</p>
        </div>

        <div className="rounded-t-lg bg-white shadow mb-12">
          <div className="rounded-t-lg bg-gray-300 text-emerald-900 p-4">
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
      </section>
    </main>
  );
}
