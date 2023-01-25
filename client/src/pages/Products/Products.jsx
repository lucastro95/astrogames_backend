import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categoriesAction from "../../redux/categories/categories-actions";

import Categorias from "../../components/Categories/Categorias";
import Productos from "../../components/Productos/Productos";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ProductsWrapper } from "./ProductsStyles";
import swal from "sweetalert";

const Products = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const listOfCategories = useSelector(
    (state) => state.categories.categories
  ).map((category) => category.category);

  const handleSubmit = (e, value) => {
    e.preventDefault();

    const newCategory = value.trim().toLowerCase().split(" ").join("");

    const selectedCategory = listOfCategories.find(
      category => category.toLowerCase() === newCategory
    );

    if (selectedCategory) {
      dispatch(categoriesAction.selectCategory(selectedCategory));
    } else {
      return (
        swal({
          text: "No se encontraron productos con esa categoría",
          icon: "warning",
          button: "Entendido"
        })
      )
    }

    setValue("");
  };

  return (
    <ProductsWrapper>
      <Categorias />
      <SearchBar
        value={value}
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
      <Productos />
    </ProductsWrapper>
  );
};

export default Products;
