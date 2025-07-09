import React from "react";
import usemovieoverview from "../Hooks/usemovieoverview";
import { useParams } from "react-router-dom";

const Movieoverview = () => {
  const { id } = useParams();
  const overviews = usemovieoverview(id);
  console.log(overviews);

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
        {overviews?.original_title}
      </h1>
      <div className="text-gray-300 leading-relaxed text-sm md:text-base">
        <p>{overviews?.overview}</p>
      </div>
    </div>
  );
};

export default Movieoverview;
