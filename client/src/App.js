import React, { useState } from "react";
import "./App.css";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Loader from "./components/Loader";
import Context from "./Context";
import { Routes, Route } from "react-router-dom";
import Policy from "./components/pages/Policy";
import TermsCondition from "./components/pages/TermsCondition";
import Blog from "./components/pages/Blog";
import GoTop from "./components/GoTop";
import BlogDetail from "./components/pages/BlogDetail";
import Footer from "./components/Footer";

const App = () => {
  const [loader, setLoader] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <Context.Provider value={{ loader, setLoader, isSidebar, setIsSidebar }}>
      <div className="app">
        <Navbar />
        <GoTop />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} />
        </Routes>

        <Footer />
        {loader && <Loader />}
        <ToastContainer
          position="top-center"
          autoClose={400}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          transition={Bounce}
          draggable
          theme="dark"
          limit={1}
          style={{
            fontWeight: 800,
            padding: "10px",
          }}
        />
      </div>
    </Context.Provider>
  );
};

export default App;
