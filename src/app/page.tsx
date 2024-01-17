import WorkspaceForm from "@/components/WorkspaceForm";
import fetchAPI from "@/helpers/fetchAPI";
import { Workspace } from "@/interfaces";

export default async function Home() {
  const { data: workspacesData } = await fetchAPI<Workspace[]>("workspaces");
  
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

        <WorkspaceForm workspacesData={workspacesData || []} />
      </section>
    </main>
  );
}
