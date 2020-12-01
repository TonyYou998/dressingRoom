import {combineReducers} from "redux";
import data from "./data"
let initialState={
    listProduct:data,
}
const ProductReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 1:
            
            return {...state}
    
        default:
            return {...state}
    }

}
export default ProductReducer;