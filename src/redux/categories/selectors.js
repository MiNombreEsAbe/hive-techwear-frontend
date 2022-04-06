import { createSelector } from "reselect";

const categoriesSelector = (state) => state.categories;
export const fetchCategories = createSelector([categoriesSelector], (state) => state);
