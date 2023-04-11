import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";

const App = () => {
  return (
    <div className="app">
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
  );
};

export default App;
