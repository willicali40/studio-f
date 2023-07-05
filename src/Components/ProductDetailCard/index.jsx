function ProductDetailCard() {
  return (
    <div className="w-full h-28 mt-4 pb-2 flex border-b border-stone-300">
      <img
          src="../../../public/products/-stfco-producto-Bolsosycarteras-BLANCO-S402293-1.webp"
          className="w-24 h-24 mr-4"
        />
        <div className="w-3/5">
          <h6 className="font-bold tracking-tight">nombre del producto</h6>
          <p className="text-sm font-light mb-1">Cantidad: 1</p>
          <p className="font-bold">$234.000</p>
        </div>
    </div>
  )
}

export default ProductDetailCard
