import React from "react";
import Producto from "./Producto";
import { ProductosLayout, ButtonsWrapper } from "./ProductosStyles";
import { useSelector } from "react-redux";
import { useState } from "react";
import { INITIAL_LIMIT } from "../../utils/constants";
import { useEffect } from "react";

const Productos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategories
  );

  const totalProducts = useSelector((state) => state.products.totalProducts);

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
    console.log(products);
  }

  useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory]);

  return (
    <ProductosLayout>
      {Object.entries(products).map(([, items]) =>
          items.map(item => {
            if (limit >= item.id || selectedCategory) {
              return <Producto key={item.id} {...item} />;
            }
            return null;
          })
        )}
      {!selectedCategory && (
        <ButtonsWrapper>
          <button
            onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
            disabled={INITIAL_LIMIT === limit}
          >
            Ver menos
          </button>
          <button
            onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
            disabled={totalProducts <= limit}
          >
            Ver más
          </button>
        </ButtonsWrapper>
      )}
    </ProductosLayout>
  );
};

export default Productos;
