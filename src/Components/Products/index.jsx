import { useContext } from "react";
import { ShoppingContext } from "../../Context/index";
import ProductCard from "../ProductCard/index";

function Products() {
  const context = useContext(ShoppingContext);

  function renderProducts() {
    const productsToRender =
      context.inputValue?.length > 0 ? context.filteredItems : context.data;

    if (productsToRender?.length > 0) {
      return productsToRender.map((product, index) => {
        return (
          <ProductCard
            key={index}
            image={product.images[0]}
            state={"NUEVO"}
            title={product.title}
            price={product.price}
            product={product}
          />
        );
      });
    }
  }

  return (
    <div className="w-full justify-center relative top-20">
      <p className="text-center text-lg font-bold">{context.isCategoryActive? '' : context.category}</p>
      <div className="w-full flex flex-wrap justify-center">
        {renderProducts()}
      </div>
    </div>
  );
}

export default Products;
