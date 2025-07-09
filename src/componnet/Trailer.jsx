import React from "react";
import { useParams } from "react-router-dom";
import useallmovietrailer from "../Hooks/useallmovietrailer";

const Trailer = () => {
  const { id } = useParams();
  const results = useallmovietrailer(id);

  if (!results || !results.key) {
    return (
      <div className="w-full h-full flex justify-center items-center text-gray-300 text-lg">
        Loading trailer...
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <iframe
        className="w-full aspect-video rounded-xl shadow-lg border border-gray-700"
        src={`https://www.youtube.com/embed/${results.key}?autoplay=1&loop=1&mute=1&playlist=${results.key}`}
        title="YouTube trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
