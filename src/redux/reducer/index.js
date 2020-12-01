import { combineReducers } from "redux";
import ProductReducer from "../ProductReducer/index";
import listCategoriesReducer from "../CategoriesReducer/index";
import SelectCategoriesReducer from "../selectCatagories/index";
import ModelReducer from "../ModelReducer/ModelReducer";
const RootReducer = combineReducers({
  // danh sách các state lưu ở store
  ProductReducer,
  listCategoriesReducer,
  SelectCategoriesReducer,
  ModelReducer,
});
export default RootReducer;
