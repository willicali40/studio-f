import { useContext } from "react";
import { ShoppingContext } from "../../Context/index";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Navbar() {
  const context = useContext(ShoppingContext);

  function getCategory(e) {
    let category = e.target.innerText;
    context.setCategory(category);
    context.setIsCategoryActive(false)
  }

  function inputSearch(e) {
    let searchValue = e.target.value;
    context.setInputValue(searchValue)
    context.setIsCategoryActive(true)
  }

  return (
    <nav className="flex justify-between items-center p-2 w-100vw fixed top-0 left-0 right-0 bg-white font-montserrat">
      {/* left nav section */}
      <div className="flex w-2/4 p-1 items-center">
        <span className=" w-8 h-12">
          <AiOutlineMenu className="w-full h-full cursor-pointer" />
        </span>
        <div className="ml-6 text-4xl">
          <Link to="/">STUDIO F</Link>
        </div>
        <ul className=" ml-8 flex justify-between items-center w-44 text-xs font-bold">
          <Link
            className="pr-2 border-r-2 border-black"
            to="/products"
            onClick={(e) => getCategory(e)}
          >
            MUJER
          </Link>
          <Link to="/products" onClick={(e) => getCategory(e)}>
            HOMBRE
          </Link>
          <Link
            className="pl-2 border-l-2 border-black"
            to="/products"
            onClick={(e) => getCategory(e)}
          >
            OUTLET
          </Link>
        </ul>
      </div>
      {/* right section */}
      <div className="flex w-2/4 p-1 justify-end text-sm font-light items-center">
        <div className="flex justify-between border-b-2 border-black mr-7">
          <input
            className="text-light focus:outline-none mb-1"
            type="text"
            placeholder="BUSCAR"
            onChange={(e) => {
              inputSearch(e);
            }}
          />
          <Link to="/products">
            <AiOutlineSearch className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex justify-between w-56 mr-16 items-center">
          <span className="flex justify-between border-r-2 border-black pr-2">
            <AiOutlineUser className="w-4 h-4" />
            <Link to="https://www.studiof.com.co/login?ReturnUrl=%2f_secure%2fcuenta%2fpedidos">Iniciar Seción</Link>
          </span>
          <span>
          <Link to="https://www.studiof.com.co/rastreo">
            <LiaTruckMovingSolid className="w-6 h-6" />
          </Link>
          </span>
          <span className="w-20 flex justify-between border-l-2 border-black pl-2 cursor-pointer" onClick={() => {context.openProductsToCart()}}>
            <div className="w-6 h-6  relative">
              <AiOutlineShoppingCart className="w-6 h-6" />
              <div className="flex justify-center items-center w-4 h-4 absolute text-white bg-red-500 rounded-full -top-2 -right-2">
                {context.count}
              </div>
            </div>
            <p>Carrito</p>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
