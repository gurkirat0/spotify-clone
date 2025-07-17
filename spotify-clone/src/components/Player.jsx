import React,{useContext} from "react";
import { assets } from "../assets/assets"; //importing songsData (array) from assets
import { PlayerContext } from "../context/PlayerContext"; //importing PlayerContext to access audioRef and other context values

const Player = () => {
    const {seekBar, seekBg, playStatus, play, pause, track, time , previous ,next, seekSong} = useContext(PlayerContext); //using useContext to access seekBar and seekBg from PlayerContext and play status to hide one of the play or pause icon
  return track ?  (
    <div className='h-[10%] bg-black flex items-center justify-between text-white px-4 '>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12 ' src={track.image} alt="" /> {/* Displaying the first song's image */}
        <div> {/* Displaying the first song's name and description */}
            <p>{track.name}</p>
            <p>{track.desc.slice(0, 12)}...</p> {/* Slicing the description to show only the first 12 characters */}
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4 ">
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
          {playStatus
          ?<img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
          :<img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
        }
          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className='flex items-center gap-5'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4 " src={assets.plays_icon} alt="" />
        <img className="w-4 " src={assets.mic_icon} alt="" />
        <img className="w-4 " src={assets.queue_icon} alt="" />
        <img className="w-4 " src={assets.speaker_icon} alt="" />
        <img className="w-4 " src={assets.volume_icon} alt="" />
        <div className="w-20 bg-slate-50 h-1 rounded">

        </div>
        <img className="w-4 " src={assets.mini_player_icon} alt="" />
        <img className="w-4 " src={assets.zoom_icon} alt="" />
      </div>
    </div>
  ) : null
}

export default Player;
