import { Outlet } from "react-router-dom";
import Header from "./Header";  // Import your Header component
import Footer from "./Footer";  // Import your Footer component

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer /> 
    </div>
  );
};

export default Layout;
