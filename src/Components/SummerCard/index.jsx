import { Link } from "react-router-dom";

function SummerCard({ img, title, active }) {
  return (
    <div className="w-72 text-white relative mx-3 hover:scale-110 transition-transform">
    <Link to="/products">
      <img src={img} alt={title} />
    </Link>
      <div className="flex flex-col justify-center items-center absolute bottom-0 w-full h-1/4">
        <h1 className="w-full text-center font-montserrat tracking-tighter md:text-2xl xl:text-4xl leading-8 md:mb-0 xl:mb-3">{title}</h1>
        {
          active && <a className="border-b border-white mb-2 font-montserrat font-light cursor-pointer">Ver todo</a>
        }
      </div>
    </div>
  );
}

export default SummerCard;
