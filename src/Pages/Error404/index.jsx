import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="w-full">
      <figure className="w-full mt-28">
        <img
          className="w-full"
          src="public\404\STF-ERROR404-BANNER-LG.jpg"
          alt="Página no encontrada"
        />
      </figure>
      <div className="w-full flex justify-center mt-6">
        <Link to="/">
          <input
            className="md:w-72 xl:w-80 md:h-8 xl:h-12 font-extrabold text-white text-sm bg-green-600 cursor-pointer"
            type="button"
            value="VOLVER"
          />
        </Link>
      </div>
    </div>
  );
}

export default Error404;
