import millify from "millify";
import { useState } from "react";

const VideoInfo = ({ video }) => {
 const [isFull,setIsfull] = useState(false)

  console.log(video);

  const date = new Date(video.publishDate).toLocaleDateString("tr", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const text =
isFull ? video.description :
video.description.slice(0,100) + "  Daha Fazla..."





  return (
    <div 
    
    onClick={()=>setIsfull(!isFull)}
    className="bg-zinc-700 rounded-lg p-2 mt-4 cursor-pointer hover:bg-opacity-80">
      <div className="flex gap-4 mb-2 font-bold">
        <p>{millify(video.viewCount)} Görüntüleme</p>
        <p>{date}</p>
      </div>




      <p>{text.split('\n').map((line,key)=>( <span key={key}> {line}  <br/> </span>))}</p> 
    </div>
  );
};

export default VideoInfo;
