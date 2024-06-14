import React, { useContext, useState } from "react";
import "./MainSection.css";
import Content from "./Content";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Context from "../Context";
import Post from "./media/Post";
import Features from "./Features";
import { v4 as uuidv4 } from "uuid";

const MainSection = () => {
  const [input, setInput] = useState("");
  const { setLoader } = useContext(Context);
  const [carousel, setCarousel] = useState([]);

  const [progressShow, setProgressShow] = useState(false);
  const [progressFill, setProgressFill] = useState(0);
  const [progressText, setProgressText] = useState("Downloaded 0%");

  const download = (e) => {
    e.preventDefault();
    setCarousel([]);
    if (input.length > 0) {
      if (
        input.startsWith("https://www.instagram.com/reel") ||
        input.startsWith("https://www.instagram.com/tv")
      ) {
        callApi(`reels`);
      } else if (
        input.startsWith("https://www.instagram.com") &&
        input.includes("/p/")
      ) {
        callApi(`posts`);
      } else if (input.startsWith("@")) {
        callApi(`profile`);
      } else {
        toast("Please enter a valid input");
      }
    } else {
      toast("Please enter a valid input");
    }
  };

  const callApi = (endPoint) => {
    try {
      setLoader(true);
      axios
        .get(`${process.env.REACT_APP_API_URL}/${endPoint}`, {
          params: { url: input },
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((resp) => {
          setCarousel(resp.data);
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);
          toast(err);
          // toast("Something went wrong ! Please try again");
        });
    } catch (error) {
      setLoader(false);
      toast("Something went wrong ! Please try again");
    }
  };

  const pasteURL = async () => {
    setInput((await navigator.clipboard.readText()).trim());
  };

  // SAVE MEDIA
  const saveMedia = (url, type) => {
    setProgressShow(1);
    if (url !== "") {
      axios
        .get(url, {
          responseType: "blob",
          onDownloadProgress: function (e) {
            let complete = Math.floor(e.loaded / e.total) * 100;
            setProgressFill(complete);
            setProgressText(`Downloaded ${complete}%`);
          },
        })
        .then((res) => {
          const blob = new Blob([res.data]);
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = `InstaPix_${uuidv4().slice(0, 7)}.${
            type === "IMAGE" ? "jpeg" : "mp4"
          }`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((err) => console.log(err));

      setTimeout(() => {
        setProgressFill(0);
        setProgressText(`Downloaded 0%`);
        setProgressShow(false);
      }, 1000);
    } else {
      toast.error("URL is not valid");
    }
  };

  return (
    <>
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
            placeholder="paste link or @username ..."
          />
          <div className="paste-btn" onClick={pasteURL}>
            <i className="bi bi-clipboard2"></i>
            <span>Paste</span>
          </div>

          <span className="dp-info">
            <i className="bi bi-person-circle"></i> Ex: @username
          </span>
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

        <div className="mediaSection mt-4">
          {carousel.length > 0 && (
            <Post carouselArray={carousel} callSaveMedia={saveMedia} />
          )}
        </div>

        {carousel.length > 0 && (
          <button
            className="cssbuttons-io-button mt-4 mb-4"
            onClick={() => {
              setCarousel([]);
              setInput("");
            }}
          >
            DOWNLOAD MORE
          </button>
        )}

        {progressShow && (
          <div className="wrapper">
            <div className="progress-bar">
              <span
                className="progress-bar-fill"
                style={{ width: `${progressFill}%` }}
              ></span>
            </div>
            <span className="progress-text">{progressText}</span>
          </div>
        )}
      </div>
      <Features />
    </>
  );
};

export default MainSection;
