import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { ShoppingContext } from '../../Context/index'

function ProductDetailCard({image, title, price, id}) {
  const context = useContext(ShoppingContext)

  function handleDelete(id) {
    const deletedProducts = context.productsToCart.filter(product => product.id != id)
    context.setProductsToCart(deletedProducts)
    context.setCount(context.count - 1)
  }
  return (
    <div className="w-full h-28 mt-4 pb-2 flex border-b border-stone-300 relative">
    <GrClose  className="w--3 h-3 absolute top-1 right-1 cursor-pointer" onClick={() => {handleDelete(id)}}/>
      <img
          src={image}
          alt={title}
          className="w-24 h-24 mr-4"
        />
        <div className="w-3/5 overflow-hidden">
          <h6 className="font-bold tracking-tight">{title}</h6>
          <p className="text-sm font-light mb-1">Cantidad: 1</p>
          <p className="font-bold">${price}</p>
        </div>
    </div>
  )
}

export default ProductDetailCard
