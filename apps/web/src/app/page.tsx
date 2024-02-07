import AddApplicationDrawer from "@/app/_components/add-application-drawer";
import ApplicationList from "@/app/_components/application-list";
import {Suspense} from "react";

export const dynamic = "force-dynamic";
export const revalidate = 5;

export default function HomePage() {
  return (
    <div className={"p-4 flex flex-wrap gap-4"}>
      <h1>Applications</h1>
      <AddApplicationDrawer/>
      <Suspense fallback={<p>Loading...</p>}>
        <ApplicationList/>
      </Suspense>
    </div>
  )
}
