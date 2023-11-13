import CreateWorkspace from "@/components/CreateWorkspace";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-emerald-900 text-white">
      <section className="p-5" style={{ maxWidth: 1000, width: "100%" }}>
        <div className="mb-12">
          <div
            className="bg-white rounded-full text-emerald-900 flex items-center justify-center"
            style={{ width: 100, height: 100 }}
          >
            <span className="block"> Logo </span>
          </div>
        </div>

        <div className="mb-12">
          <h1 className="mb-2 text-4xl font-extrabold">Welcome Back!</h1>

          <p>choose your workspace to reach the box</p>
        </div>

        <div className="rounded-t-xl bg-white shadow mb-4">
          <div className="rounded-t-xl bg-gray-100 text-emerald-900 p-4">
            <p>Work for abckumar@spbox.com</p>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <div
                  className="bg-violet-400 rounded-xl text-emerald-900 flex items-center justify-center"
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

        <CreateWorkspace />
      </section>
    </main>
  );
}
