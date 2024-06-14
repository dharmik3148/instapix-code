import React from "react";

const Post = ({ carouselArray, callSaveMedia }) => {
  return carouselArray.map((item, index) => {
    return (
      <div className="Post" key={index}>
        <img crossOrigin="anonymous" src={item.thumbnail} alt={index} />

        <button
          className="mediaBtn"
          id="btn"
          onClick={() => {
            callSaveMedia(item.download, item.type);
          }}
        >
          <span>Download {item.type === "IMAGE" ? "Photo" : "Video"}</span>
        </button>
        {item.type === "IMAGE" ? (
          <i className="bi bi-image"></i>
        ) : (
          <i className="bi bi-play-circle-fill"></i>
        )}
      </div>
    );
  });
};

export default Post;
