import Movieoverview from "./Movieoverview";
import Trailer from "./Trailer";

const Movietrailer = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-white flex flex-col lg:flex-row p-6 gap-6">
      <div className="w-full lg:w-2/3 rounded-xl overflow-hidden shadow-lg">
        <Trailer />
      </div>
      <div className="w-full lg:w-1/3 bg-gray-900 rounded-xl p-6 shadow-lg">
        <Movieoverview />
      </div>
    </div>
  );
};

export default Movietrailer;
