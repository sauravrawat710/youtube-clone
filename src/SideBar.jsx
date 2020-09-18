import React from "react";
import "./SideBar.css";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OnDemandVideoIcon from "@material-ui/icons/Subscriptions";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import SideBarRow from "./SideBarRow";

const SideBar = () => {
  return (
    <div className="sideBar">
      <SideBarRow selected Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={WhatshotIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionIcon} title="Subscription" />
      <hr />
      <SideBarRow Icon={VideoLibraryIcon} title="Library" />
      <SideBarRow Icon={HistoryIcon} title="History" />
      <SideBarRow Icon={OnDemandVideoIcon} title="Your videos" />
      <SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
    </div>
  );
};

export default SideBar;
