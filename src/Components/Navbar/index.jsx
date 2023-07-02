import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { LiaTruckMovingSolid } from 'react-icons/lia'

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2 w-100vw fixed top-0 left-0 right-0 bg-white">
      {/* left nav section */}
      <div className="flex w-2/4 p-1 items-center">
        <span className=" w-8 h-12">
          <AiOutlineMenu className="w-full h-full" />
        </span>
        <div className="ml-6 text-4xl">
          <p>STUDIO F</p>
        </div>
        <ul className=" ml-8 flex justify-between items-center w-44 text-xs font-bold">
          <li className="pr-2 border-r-2 border-black">MUJER</li>
          <li>HOMBRE</li>
          <li className="pl-2 border-l-2 border-black">OUTLET</li>
        </ul>
      </div>
      {/* right section */}
      <div className="flex w-2/4 p-1 justify-end text-sm font-light items-center">
        <div className="flex justify-between border-b-2 border-black mr-7">
          <input className="text-light focus:outline-none mb-1" type="text" placeholder="BUSCAR" />
          <AiOutlineSearch className='w-4 h-4' />
        </div>
        <div className="flex justify-between w-56 mr-16 items-center">
          <span className="flex justify-between border-r-2 border-black pr-2">
            <AiOutlineUser  className='w-4 h-4'/>
            <p>Iniciar Seción</p>
          </span>
          <span>
          <LiaTruckMovingSolid className='w-6 h-6' />
          </span>
          <span className="w-20 flex justify-between border-l-2 border-black pl-2">
          <div className='w-6 h-6  relative'>
            <AiOutlineShoppingCart className='w-6 h-6' />
            <div className='flex justify-center items-center w-4 h-4 absolute bg-red-500 rounded-full -top-2 -right-2'>
                4
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
