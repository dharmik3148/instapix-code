import React from "react";
import "./Features.css";

import Igtv from "../assets/Igtv.jpeg";
import Photo from "../assets/Photo.jpg";
import Reels from "../assets/Reels.png";
import Series from "../assets/Series.jpg";
import Video from "../assets/Video.jpg";

const Features = () => {
  const data = [
    {
      img: Video,
      title: "Instagram video downloader",
      desc: "instapix was created to allow you to Instagram Video Download your own content. instapix supports downloading videos for some videos and many videos from Insta.",
    },
    {
      img: Photo,
      title: "Instagram photo downloader",
      desc: "Instagram Photo Downloader from instapix allows you to save any photo or collage from Instagram without any difficulty. With instapix you can download a single post image as well as download multiple Instagram photos.",
    },
    {
      img: Reels,
      title: "Download Instagram Reels",
      desc: "Instagram Reels Downloader by instapix will help you download Reels videos from Instagram posts to your device in the easiest way when Instagram does not support you in this.",
    },
    {
      img: Igtv,
      title: "IGTV downloader",
      desc: "IGTV is a long video, in case you can't watch it right now, you can download IGTV video to your computer, to make sure you can return to watch later, no network connection required or delete IGTV.",
    },
    {
      img: Series,
      title: "Instagram Story Download",
      desc: "Instagram stories are a unique way for anyone to share their everyday life with photos and videos with everyone. Sometimes you want to archive a story you like but the feature is not supported in the app. instapix was created to solve that problem; to help people download Instagram stories and watch them online.",
    },
    {
      img: Series,
      title: "Instagram Story Viewer",
      desc: "IGTV is a long video, in case you can't watch it right now, you can download IGTV video to your computer, to make sure you can return to watch later, no network connection required or delete IGTV.",
    },
  ];

  const faqData = [
    {
      question: "What is an Instagram video downloader website?",
      answer:
        "An Instagram video downloader website is an online platform that allows users to download videos, photos, reels, and stories from Instagram. You can initiate the download rapidly using www.abx.com.",
    },
    {
      question: "Can I download private Instagram videos using these websites?",
      answer:
        "Yes, with the use of www.abx.com, you can download videos easily from private accounts. User login websites can also access and download videos that are from private accounts.",
    },
    {
      question: "Are Instagram video downloader websites free to use?",
      answer:
        "Yes, Instagram video downloader websites offer their services for free.",
    },
    {
      question: "Can I download any Instagram video using these websites?",
      answer:
        "Yes, you can download Instagram videos in HD using these websites.",
    },
    {
      question: "Can I download Instagram videos on my mobile device?",
      answer:
        "Yes, Instagram video downloader websites are accessible on mobile devices through web browsers. You can visit these websites and follow the same steps to download Instagram videos as you would on a computer.",
    },
    {
      question:
        "Are there any limitations on the length or size of videos that can be downloaded?",
      answer:
        "No, there are no limitations on the length or size of videos that can be downloaded using these websites.",
    },
    {
      question:
        "Can I download multiple Instagram videos at once using these websites?",
      answer:
        "Yes, these websites allow multiple downloading, where you can enter multiple video URLs or select multiple videos to download simultaneously.",
    },
    {
      question:
        "Can I download Instagram videos in high quality using these websites?",
      answer:
        "Yes, you can download Instagram videos in HD quality using these websites.",
    },
  ];

  return (
    <div className="features">
      <span className="feat_title">All features of instapix.app</span>
      <span className="feat_descr">
        instapix supports all types of Instagram videos/images links
      </span>
      <div className="main_guide">
        {data.map((item, key) => {
          return (
            <div className="feat_guide" key={key}>
              <div className="guide_left">
                <img src={item.img} alt="" />
              </div>
              <div className="guide_right">
                <span>{item.title}</span>
                <span>{item.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
      <span className="feat_title">
        How to save from IG with Instapix Instagram Downloader?
      </span>
      <ol className="steps">
        <li>
          Open the Instagram app on your smartphone or go to the Instagram
          website on your computer.
        </li>
        <li>
          select the video URL, post , reel and story from your smartphone or
          computer and "Copy Link."
        </li>
        <li>
          Visit a www.abx.com. Select Your downloading Category like a INSTAGRAM
          video DOWNLOAD, INSTAGRAM photo DOWNLOAD, INSTAGRAM reel DOWNLOAD or
          INSTAGRAM story DOWNLOAD and Paste(Ctrl+V) the URL in Search Box.
        </li>
        <li>
          Click on the download button & Save the video in your smartphone or
          computer. You can also choose a specific folder for download location.
        </li>
      </ol>

      {/* fAQ START */}
      <span className="feat_title">FAQ</span>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {faqData.map((item, id) => {
          return (
            <div className="accordion-item" key={id}>
              <h2 className="accordion-header" id={`flush-heading${id}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${id}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${id}`}
                >
                  {item.question}
                </button>
              </h2>
              <div
                id={`flush-collapse${id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`flush-heading${id}`}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* fAQ END */}
    </div>
  );
};

export default Features;
