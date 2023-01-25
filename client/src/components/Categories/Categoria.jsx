import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as categoriesAction from "../../redux/categories/categories-actions";

import { CategoryCard } from "./CategoriesStyles";

const Categoria = ({ img, title, category }) => {
  const selectCategory = useSelector(
    (state) => state.categories.categories.selectedCategories
  );
  const dispatch = useDispatch();
  return (
    <CategoryCard
      selected={category === selectCategory}
      onClick={() => dispatch(categoriesAction.selectCategory(category))}
    >
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </CategoryCard>
  );
};

export default Categoria;
