import React, { useContext, useState } from "react";
import "./MainSection.css";
import Content from "./Content";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Context from "../Context";

const MainSection = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});
  const { setLoader } = useContext(Context);

  const options = {
    method: "GET",
    url: process.env.REACT_APP_API_URL,
    params: { shortcode: input.split("/")[4] },
    headers: {
      "X-RapidAPI-Key": "bba8e4f7famsh7ebc76b46ec70fcp1b7e56jsn8ee2958e8f80",
      "X-RapidAPI-Host": "instagram-scraper-2022.p.rapidapi.com",
    },
  };

  const download = () => {
    setLoader(true);
    if (input === "") {
      toast.error("Please enter a URL");
      setLoader(false);
    } else if (!input.includes("https://www.instagram.com/")) {
      toast.error("URL is not valid");
      setLoader(false);
    } else {
      axios
        .request(options)
        .then((res) => {
          setInput("");
          setData(res.data);
          setLoader(false);
          console.log(res.data);
        })
        .catch((err) => {
          toast.error("Something went wrong !! Please try again");
          setLoader(false);
        });
    }
  };

  const pasteURL = async () => {
    setInput((await navigator.clipboard.readText()).trim());
  };

  return (
    <div className="mainSection">
      <Content />
      <div className="input-section">
        <input
          className="input"
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          placeholder="Paste instagram URL..."
        />
        <div className="paste-btn" onClick={pasteURL}>
          <i className="bi bi-clipboard2"></i>
          <span>Paste</span>
        </div>
      </div>
      <button className="cssbuttons-io-button" onClick={download}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
          ></path>
        </svg>
        <span>Download</span>
      </button>
    </div>
  );
};

export default MainSection;
