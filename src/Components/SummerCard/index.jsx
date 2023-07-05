function SummerCard({ img, title, active }) {
  return (
    <div className="w-80 text-white relative">
      <img src={img} alt={title} />
      <div className="flex flex-col justify-center items-center absolute bottom-0 w-full h-1/4">
        <h1 className="w-full text-center font-montserrat tracking-tighter text-5xl leading-8 mb-3">{title}</h1>
        {
          active && <a className="border-b border-white mb-2 font-montserrat font-light">Ver todo</a>
        }
      </div>
    </div>
  );
}

export default SummerCard;
