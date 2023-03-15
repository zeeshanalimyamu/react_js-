import { useReducer, useState } from "react";
import "./App.css";
import videoDB from "./data/data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
import VideosContext from "./context/VideosContext";
import Counter from "./components/Counter";
function App() {
  console.log("render App");

  const [editableVideos, setEditableVideos] = useState(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);

      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideos(null);
        // yha par E and V dono capital hona chahiye nhi to ye
        // read nhi kr pata h
        return newVideos;

      default:
        return videos;
    }
  }

  // const themeContext = useContext(ThemeContext);
  // console.log({themeContext});
  const [videos, dispatch] = useReducer(videoReducer, videoDB);
  const [mode, setMode] = useState("darkMode");
  function editVideo(id) {
    console.log(id);
    setEditableVideos(videos.find((video) => video.id === id));
  }

  return (
    <ThemeContext.Provider value={mode}>
      <VideoDispatchContext.Provider value={dispatch}>
        <VideosContext.Provider value={videos}>
          <div className={`App ${mode}`} onClick={() => console.log("App")}>
            {/* const themeContext=useContext(ThemeContext) */}
            <Counter></Counter>
            <button
              onClick={() =>
                setMode(mode === "darkMode" ? "lightMode" : "darkMode")
              }
            >
              changeMode
            </button>
            <div>
              <AddVideo
                // dispatch={dispatch}
                editableVideos={editableVideos}
              ></AddVideo>
            </div>
            <div>
              <VideoList
                // dispatch={dispatch}
                editVideo={editVideo}
                // editable video ham useState m use kr rhe h iss wjah se ham isko context k jariye pass nhi kr rhe h
                // videos={videos}
              ></VideoList>
            </div>
          </div>
        </VideosContext.Provider>
      </VideoDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
