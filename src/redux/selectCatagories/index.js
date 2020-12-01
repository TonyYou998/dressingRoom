let initialState = {
  categories: "topclothes",
};
const SelectCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      state.categories = action.payload;

      console.log(state.categories);

      return { ...state };

    default:
      return { ...state };
  }
};
export default SelectCategoriesReducer;
