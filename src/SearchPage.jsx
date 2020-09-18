import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://cdn-images-1.medium.com/max/1200/1*dX5yfQ9E4ElBnzYjaS1Yzg.png"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="Do you want to become JavaScript Developer & make an income?"
      />

      <hr />

      <VideoRow
        views="1.2K"
        subs="650K"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS "
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build Youtube Clone"
        image="https://www.maketecheasier.com/assets/uploads/2018/07/Thumbnail-makers-for-youtube-featured.jpg"
      />
      <VideoRow
        views="1.2K"
        subs="650K"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS "
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build Youtube Clone"
        image="https://www.maketecheasier.com/assets/uploads/2018/07/Thumbnail-makers-for-youtube-featured.jpg"
      />
      <VideoRow
        views="1.2K"
        subs="650K"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS "
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build Youtube Clone"
        image="https://www.maketecheasier.com/assets/uploads/2018/07/Thumbnail-makers-for-youtube-featured.jpg"
      />
      <VideoRow
        views="1.2K"
        subs="650K"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS "
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build Youtube Clone"
        image="https://www.maketecheasier.com/assets/uploads/2018/07/Thumbnail-makers-for-youtube-featured.jpg"
      />
    </div>
  );
};

export default SearchPage;
