import React from "react";
import "./Preview.css";
import { downloadJSON } from "../../utils/fileUtils";
import { IoMdMic } from "react-icons/io";

const Preview = ({ config }) => {
  const {
    botName,
    headerColor,
    headerFontColor,
    fontFamily,
    backgroundColor,
    chatFontColor,
    avatarImage,
  } = config;

  return (
    <div
      className="preview-container"
      style={{ backgroundColor: backgroundColor, position: "relative" }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        <span className="green-dot"></span> Live Preview
      </h3>
      <div className="chat-window">
        {/* Header */}
        <div
          className="chat-header"
          style={{ backgroundColor: headerColor, color: headerFontColor }}
        >
          <div className="chat-header-content">
            <img src={avatarImage} alt="Avatar" className="chat-avatar" />
            <span className="chat-bot-name">{botName}</span>
          </div>
          <span className="chat-close">✕</span>
        </div>

        {/* Chat Body */}
        <div
          className="chat-body"
          style={{
            backgroundColor: backgroundColor,
            fontFamily: fontFamily,
            color: chatFontColor,
          }}
        >
          Hi! I'm {botName}, your friendly concierge monster, here to answer
          questions, show you around, and automatically perform tasks on the
          site for you. How can I help?
        </div>

        {/* Help Strip */}
        <div className="help-strip" style={{ color: chatFontColor }}>
          <span>Need help? Just type or say it</span>
          <span role="img" aria-label="Microphone" className="help-microphone">
            <IoMdMic />
          </span>
        </div>
      </div>

      {/* Launcher Image */}
      <div className="launcher">
        <img src={avatarImage} alt="Launcher" className="launcher-image" />
      </div>

      <button
        onClick={() => downloadJSON(config, config.name)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#000",
          color: "#FFF",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "200px",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Download Config
      </button>
      <div
        style={{
          marginTop: "10px",
          fontSize: "14px",
          color: "#555",
          fontStyle: "italic",
        }}
      >
        {`${config.name}.json`}
      </div>
    </div>
  );
};

export default Preview;
