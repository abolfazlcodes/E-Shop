import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
