/** @jsx jsx */
import { jsx } from "theme-ui";

import wallpaperLogo from "../images/logos/wallpaper-logo.jpg";
import wallpaperShield from "../images/logos/wallpaper-shield.jpg";

const Assets = () => {
  return (
    <div
      style={{
        display: "none",
      }}
    >
      <img src={wallpaperLogo} alt="" />
      <img src={wallpaperShield} alt="" />
    </div>
  );
};

export default Assets;
