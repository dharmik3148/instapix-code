import React, { useEffect, useState } from "react";
import "./MainSection.css";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let height = 300;
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > height) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: "65px", left: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div className="topBtn" onClick={toTop}>
          <i className="bi bi-arrow-up-circle-fill"></i>
        </div>
      )}
    </>
  );
};

export default GoTop;
