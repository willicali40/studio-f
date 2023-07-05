import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingContext } from "../../Context/index";
import ProductDetailCard from "../ProductDetailCard";
import { GrClose } from "react-icons/gr";


function CheckoutSide() {
  const context = useContext(ShoppingContext);
  return (
    <aside
      className={`${
        context.isProductsToCartOpen ? "flex" : "hidden"
      } flex-col font-montserrat w-96 h-screen fixed top-0 right-0 bg-white z-10 p-4 shadow-2xl`}
    >
      <GrClose
        className="w-6 h-6 absolute top-5 right-4 cursor-pointer"
        onClick={() => {
          context.closeProductsToCart();
        }}
      />
      <h5 className="font-bold text-lg">CARRITO DE COMPRAS</h5>
      <p className="mt-2 mb-8 text-sm font-light text-stone-600">
        {context.count} producto/s agregado/s
      </p>
      <div className="w-full h-72 mt-6 pb-4 border-b border-stone-300 overflow-scroll">
        {context.productsToCart.map((product, index) => {
          return (
            <ProductDetailCard
              key={index}
              image={product.images}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </div>
      <div className="flex justify-between w-full h-12 items-center border-b border-stone-300">
        <h4 className="font-bold text-lg">SUBTOTAL:</h4>
        <span className="text-lg">
          ${context.totalPrice(context.productsToCart)}
        </span>
      </div>
      <div className="w-full h-24 mt-2 bg-stone-100">
        <div className="w-full h-3 bg-stone-300"></div>
        <div className="flex justify-center items-center p-6">
          <p className="text-sm w-80 pl-4">
            ¡Disfruta comprando! Tu envío es total mente gratis.
          </p>
        </div>
      </div>
      <input
        type="button"
        value={"PAGAR"}
        className="w-full h-12 mt-3 mb-3 font-extrabold text-white text-sm bg-green-600"
      />
      <Link to="/">
        <p className="text-center text-xs">Continua comprando</p>
      </Link>
    </aside>
  );
}

export default CheckoutSide;
