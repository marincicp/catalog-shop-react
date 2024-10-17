import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen max-w-screen-2xl mx-auto ">
      <Header />

      <main className="bg-white overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
