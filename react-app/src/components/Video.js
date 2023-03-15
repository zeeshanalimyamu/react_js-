import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
// import VideoDispatchContext from '../context/VideoDispatchContext';
import useVideoDispatch from '../hooks/videoDispatch';
import './Video.css';

function Video({title,id,channel="Coder Dost",views,time,verified,children,editVideo}) {
  
  // agar channel prop m hoga to whi chlega nhi to Coderdost chlega
  const themeContext=useContext(ThemeContext);
  // const  dispatch=useContext(VideoDispatchContext);
   const dispatch=useVideoDispatch();
  console.log('render Video')
  return (
      <>
      <div className={`container ${themeContext}`}>
      <button className='close' onClick={()=>dispatch({type:'DELETE',payload:id})}> X </button>
      <button className='edit'  onClick={()=> editVideo(id)}> Edit </button>
      <div className="pic">
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
      </div>
      <div className={`title ${themeContext}`}>{title}</div>
      <div className="channel">{channel} {verified && '✅'} </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>
        {children}
      </div>
      </div>
      </>
  );
}

export default Video;