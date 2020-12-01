
import {combineReducers} from "redux"
import data from "./data.json";
let initialSate={
    listCategories:data,
}
const listCategoriesReducer=(state=initialSate,action)=>{
    switch (action.type) {
        case 1:
            
            return state;
    
        default:
            return state;
    }
}
export default listCategoriesReducer;