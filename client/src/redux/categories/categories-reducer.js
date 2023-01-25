import { Categories } from "../../data/Categories";
import { SELECT_CATEGORY } from "./categories-actions";

const INITIAL_STATE = {
  categories: Categories,
  selectedCategories: null,
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategories:
          action.payload !== state.selectedCategories ? action.payload : null,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
