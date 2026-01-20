import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="animate-gradient-slide">
        <Navbar />
        <main className="pt-24 px-8 min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
