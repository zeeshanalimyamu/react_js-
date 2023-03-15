import './PlayButton.css';
import { useState } from 'react';

function PlayButton({message,children,onPlay,onPause}){
    console.log('render PlayButton')

    const [playing, setPlaying] = useState(false);  
    function handleClick(e){
        // console.log(e)
        e.stopPropagation()

        if(playing) onPause()
        else onPlay();

        setPlaying(!playing);
    }

    return (
        <button onClick={handleClick}>{children} : {playing?'⏸️':'⏯️'}</button>
    )
     // children me jo andar props hote h whi chlte h
}

export default PlayButton;