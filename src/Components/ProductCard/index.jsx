function ProductCard({image, state, title, price}) {
  return (
    <div className="w-72 m-4">
      <div className="relative">
        <img src={image} alt="title" />
        <span className="absolute bottom-2 left-2 p-1 bg-black text-white text-xs">{state}</span>
      </div>
      <div className="w-full text-center">
        <p className="text-xs mt-4 font-montserrat font-bold">{title}</p>
        <p className="text-xs mt-3 font-montserrat ">{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
