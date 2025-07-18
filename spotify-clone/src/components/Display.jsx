import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import Login from "./login";
import Signup from "./Signup";

const Display = () => {

    const {albumsData} = useContext(PlayerContext);

    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("/album/");
    const albumId = isAlbum ? location.pathname.split('/').pop() : "";
    const bgColor = isAlbum ? albumsData.find((x) => (x._id == albumId)).bgColor : "121212";
    useEffect(() => {
        if (isAlbum) {
            displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
        }
        else{
            displayRef.current.style.background = ` #121212`;
        }
    })
  return (
    <div ref={displayRef} className={`w-[100%] m-2 px-6 pt-4 rounded ${bgColor} text-white overflow-auto lg:w-[75%] lg:ml-0`}>
        <Routes> {/* This is where I have added routes for different components to display on the main area */}
            <Route path="/" element={<DisplayHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/album/:id" element={<DisplayAlbum album={albumsData.find((x)=>(x._id == albumId))} />} />
                
        </Routes>
    </div>
  );
};

export default Display;
