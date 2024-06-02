import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../uitls/api";
import ReactPlayer from "react-player";
import ChannelInfo from "./ChannelInfo";
import Comments from "./Comments";
import VideoInfo from "./VideoInfo";
import VideoCard from "../../components/VideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  console.log(searchParams);
  useEffect(() => {
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));

    api.get(`/comments?id=${id}`).then((res) => setComments(res.data));
  }, [id]);
  console.log(video, comments);

  return (
    <div className="detail-page h-screen overflow-auto p-[20px] md:[40px] lg:px-[50px] xl:px-[100px]">
      <div>
        <div className="h-[30vh] md:h-[50vh] lg:h-[60vh]">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            controls
            light
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>

        {!video || !comments ? (
          <p>Yükleniyor</p>
        ) : (
          <>
            <ChannelInfo video={video} />
            <VideoInfo video={video} />
            <Comments data={comments} />
          </>
        )}
      </div>

      <div className="flex wrapper flex-col  gap-5 ps-5">
        {video?.relatedVideos.data.map((item) => (
          <VideoCard isRow={true} key={item.videoId} video={item} />
        ))}
      </div>
    </div>
  );
};

export default VideoDetail;
