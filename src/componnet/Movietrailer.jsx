import Movieoverview from "./Movieoverview"
import Trailer from "./Trailer"

const Movietrailer = () => {
  return (
    <>
      <div className="w-full flex p-8">
        <div className="w-full">
          <Trailer />
        </div>
        <div className="w-full p-5">
          <Movieoverview />
        </div>
      </div>

    </>


  )
}

export default Movietrailer