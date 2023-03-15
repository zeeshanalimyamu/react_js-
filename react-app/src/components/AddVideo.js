import "./AddVideo.css";
import { useContext, useEffect,useState } from "react";
import videoDispatchContext from "../context/VideoDispatchContext";
import useVideoDispatch from "../hooks/VideoDispatch";

const initialState = {
  title: "",
  views: "",
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
};

function AddVideo({editableVideos }) {
  const [video, setVideo] = useState(initialState);

  // const dispatch=useContext(videoDispatchContext);
  const dispatch=useVideoDispatch
  // yha par hamne directly use kr liya h
  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideos){
        dispatch({type:'UPDATE',payload:video});
    } else{
        dispatch({type:'ADD',payload:video});
    }
    
    setVideo(initialState);
  }

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
        }
  useEffect(()=>{
    if(editableVideos){
      setVideo(editableVideos)
        }
  },[editableVideos])

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        // onChange means kuch type krne par handleChange functn kam krega
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button onClick={handleSubmit}>{editableVideos?'Edit':'Add' } Video</button>
    </form>
  );
}

export default AddVideo;
