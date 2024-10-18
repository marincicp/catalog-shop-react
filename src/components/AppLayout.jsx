import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen max-w-screen-2xl mx-auto overflow-hidden w-full">
      <Header />

      <main className="overflow-y-scroll h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
