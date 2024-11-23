import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const ConfigForm = ({ config, setConfig }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
  };

  const handleColorChange = (e, key) => {
    setConfig({ ...config, [key]: e.target.value });
  };

  const handleFileUpload = (file, key) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;
      setConfig({ ...config, [key]: base64 });
    };
    reader.readAsDataURL(file);
  };

  const triggerFileUpload = (key) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*"; // Accept only images
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        handleFileUpload(file, key);
      }
    };
    fileInput.click();
  };

  const handleLoadConfig = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/json";
    fileInput.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (readEvent) => {
          try {
            const loadedConfig = JSON.parse(readEvent.target.result);
            setConfig(loadedConfig);
          } catch (error) {
            alert("Invalid JSON file. Please select a valid configuration file.");
          }
        };
        reader.readAsText(file);
      }
    };
    fileInput.click();
  };

  return (
    <div
      style={{
        backgroundColor: "#F7F7F7",
        border: "1px solid #E0E0E0",
        borderRadius: "10px",
        padding: "20px",
        margin: "0 auto",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "Space Grotesk, sans-serif",
        height:"80%",
        width:"600px"
      }}
    >
      {/* Load Config Button */}
      <div style={{ marginBottom: "15px" }}>
        <button
          onClick={handleLoadConfig}
          style={{
            width: "130px",
            padding: "10px",
            backgroundColor: "black",
            color: "#FFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Load Config
        </button>
      </div>

      {/* Config Fields */}
      <div style={{ marginBottom: "15px" }}>
        <label>Config Name</label>
        <input
          type="text"
          name="name"
          value={config.name || ""}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #CCC",
            borderRadius: "5px",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Bot Name</label>
        <input
          type="text"
          name="botName"
          value={config.botName || ""}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #CCC",
            borderRadius: "5px",
            height: "33px",
          }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Font Family</label>
        <select
          name="fontFamily"
          value={config.fontFamily || "Arial, sans-serif"}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #CCC",
            borderRadius: "5px",
            height: "33px",
          }}
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="'Georgia', serif">Georgia</option>
          <option value="Courier New, monospace">Courier New</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Header Color</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: "5px",
          }}
        >
          <input
            type="text"
            value={config.headerColor || ""}
            readOnly
            style={{
              flex: 1,
              padding: "5px 40px 5px 10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              height: "33px",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "10px",
              width: "20px",
              height: "20px",
              backgroundColor: config.headerColor || "#ffffff",
              borderRadius: "50%",
              border: "1px solid #ccc",
            }}
          ></div>
          <input
            type="color"
            value={config.headerColor || "#ffffff"}
            onChange={(e) => handleColorChange(e, "headerColor")}
            style={{
              position: "absolute",
              right: "10px",
              width: "20px",
              height: "20px",
              opacity: 0,
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Header Font Color</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: "5px",
          }}
        >
          <input
            type="text"
            value={config.headerFontColor || ""}
            readOnly
            style={{
              flex: 1,
              padding: "5px 40px 5px 10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              height: "33px",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "10px",
              width: "20px",
              height: "20px",
              backgroundColor: config.headerFontColor || "#000000",
              borderRadius: "50%",
              border: "1px solid #ccc",
            }}
          ></div>
          <input
            type="color"
            value={config.headerFontColor || "#000000"}
            onChange={(e) => handleColorChange(e, "headerFontColor")}
            style={{
              position: "absolute",
              right: "10px",
              width: "20px",
              height: "20px",
              opacity: 0,
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Background Color</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: "5px",
          }}
        >
          <input
            type="text"
            value={config.backgroundColor || ""}
            readOnly
            style={{
              flex: 1,
              padding: "5px 40px 5px 10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              height: "33px",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "10px",
              width: "20px",
              height: "20px",
              backgroundColor: config.backgroundColor || "#ffffff",
              borderRadius: "50%",
              border: "1px solid #ccc",
            }}
          ></div>
          <input
            type="color"
            value={config.backgroundColor || "#ffffff"}
            onChange={(e) => handleColorChange(e, "backgroundColor")}
            style={{
              position: "absolute",
              right: "10px",
              width: "20px",
              height: "20px",
              opacity: 0,
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Chat Font Color</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: "5px",
          }}
        >
          <input
            type="text"
            value={config.chatFontColor || ""}
            readOnly
            style={{
              flex: 1,
              padding: "5px 40px 5px 10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              height: "33px",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "10px",
              width: "20px",
              height: "20px",
              backgroundColor: config.chatFontColor || "#000000",
              borderRadius: "50%",
              border: "1px solid #ccc",
            }}
          ></div>
          <input
            type="color"
            value={config.chatFontColor || "#000000"}
            onChange={(e) => handleColorChange(e, "chatFontColor")}
            style={{
              position: "absolute",
              right: "10px",
              width: "20px",
              height: "20px",
              opacity: 0,
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Avatar Image</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            border: "1px solid #e0e0e0",
            borderRadius: "5px",
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          {config.avatarImage ? (
            <img
              src={config.avatarImage}
              alt="Avatar"
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                color: "#888",
              }}
            >
              No Image
            </div>
          )}
          <div
            onClick={() => triggerFileUpload("avatarImage")}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "15px",
              height: "15px",
            }}
          >
            <MdOutlineFileUpload size={20} color="#888" />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Launcher Image</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            border: "1px solid #e0e0e0",
            borderRadius: "5px",
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          {config.launcherImage ? (
            <img
              src={config.launcherImage}
              alt="Launcher"
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "5px", // Slightly rounded edges
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "5px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                color: "#888",
              }}
            >
              No Image
            </div>
          )}
          <div
            onClick={() => triggerFileUpload("launcherImage")}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "15px",
              height: "15px",
            }}
          >
            <MdOutlineFileUpload size={20} color="#888" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigForm;
