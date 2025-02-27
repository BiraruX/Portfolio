import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./redirect.module.css";

const RedirectPage = () => {
  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const link = params.get("link");

    const linksMap = {
      cmdrx: "https://cmdrx.biraru.org",
      discord: "https://discord.gg/KTbpAEhWsf",
      github: "https://github.com/BiraruX",
      "github-org": "https://github.com/BiraruStudios",
      roblox: "https://www.roblox.com/users/2388437852",
      "roblox-group": "https://www.roblox.com/communities/34538893",
      youtube: "https://www.youtube.com/@BiraruX",
      x: "https://x.com/BiraruX",
    };

    if (link && linksMap[link]) {
      window.location.replace(linksMap[link]);
    } else {
      setMessage("Please provide a valid argument");
    }
  }, [location]);

  return <div className={styles.message}>{message}</div>;
};

export default RedirectPage;
