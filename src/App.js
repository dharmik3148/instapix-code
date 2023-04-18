import React, { createContext, useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Loader from "./components/Loader";
import Context from "./Context";

const App = () => {
  const [loader, setLoader] = useState(false);

  return (
    <Context.Provider value={{ loader, setLoader }}>
      <div className="app">
        {loader && <Loader />}
        <ToastContainer
          position="top-right"
          autoClose={1000}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          theme="light"
        />
        <Navbar />
        <MainSection />
      </div>
    </Context.Provider>
  );
};

export default App;
