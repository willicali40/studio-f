import { Link } from "react-router-dom"

function Payment() {
  return (
    <div className='w-3/4 h-80 flex justify-center items-center m-auto mt-32 '>
      <div className='md:w-8/12 xl:w-6/12 h-full m-auto flex flex-col justify-center items-center font-montserrat border border-zinc-500 rounded-md shadow-2xl '>
        <input className="w-96 border-b border-stone-300 mt-5 focus:outline-none font-light" type='text' placeholder="Nombre"/>
        <input className="w-96 border-b border-stone-300 mt-5 focus:outline-none font-light" type='number' placeholder="Numero de tarjeta"/>
        <div className="w-96 flex justify-between">
        <input className="w-36 border-b border-stone-300 mt-5 focus:outline-none font-light" type='number' placeholder="Bencimiento"/>
        <input className="w-36 border-b border-stone-300 mt-5 focus:outline-none font-light" type='number' placeholder="CVV"/>
        </div>
        <Link to="/404">
        <input className="w-96 h-12 mt-11 mb-3 font-extrabold text-white text-sm bg-green-600 cursor-pointer" type='button' value="PAGAR"/>
        </Link>
      </div>
    </div>
  )
}

export default Payment
