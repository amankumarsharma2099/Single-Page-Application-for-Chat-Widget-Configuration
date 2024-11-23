import React, { useState } from "react";
import ConfigForm from "./components/ConfigForm/ConfigForm";
import Preview from "./components/Preview/Preview";

import img1 from "./assets/avatarimage.jpg";
import img2 from "./assets/launcher.jpg";

const App = () => {
  const [config, setConfig] = useState({
    name: "config-1",
    botName: "Greebo",
    fontFamily: "Arial, sans-serif",
    headerColor: "#E63A1E",
    headerFontColor: "#FFFFFF",
    backgroundColor: "#E8E1DB",
    chatFontColor: "#323130",
    avatarImage: img1,
    launcherImage: img2,
  });

  const handleLoadConfig = (loadedConfig) => {
    setConfig({ ...config, ...loadedConfig });
  };

  return (
    <div style={{ display: "flex", gap: "0px", padding: "20px" }}>
      {/* Configuration Form */}
      <ConfigForm config={config} setConfig={setConfig} onLoad={handleLoadConfig} />

      {/* Live Preview */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Preview config={config} />
        </div>
    </div>
  );
};

export default App;
