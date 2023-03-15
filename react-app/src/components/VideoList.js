import Video from "./Video";
import PlayButton from "./PlayButton";
// import {useContext} from "react";
import useVideos from "../hooks/VideosContext";
// import VideosContext from "../context/VideosContext";
function VideoList({editVideo}){
   const videos=useVideos();
    return(
        <>
        {videos.map((video) => (
       // ye video tag kha se aaya h iske bare m btao iss wajah se ham import krenge
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              // dispatch={dispatch}
              editVideo={editVideo}
            >
              <PlayButton
                onPlay={() => console.log('Playing..',video.title)}
                onPause={() => console.log('Paused..',video.title)}
                // ye hamne props bheja h
              >
                {video.title}
              </PlayButton>
            </Video>
          ))}



    </>
    )
}


export default VideoList;