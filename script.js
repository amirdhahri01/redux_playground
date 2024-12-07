const redux = require("redux")
const createStore = redux.createStore;

const ORDER_PIZZA = "ORDER_PIZZA"
//Action
// const action = {
//     type: ORDER_PIZZA,
//     shop_name:"PIZZA_SHOP"
// }

//Action Creator
function orderPizza(){
    return {
        type: ORDER_PIZZA,
        shop_name:"PIZZA_SHOP"
    };
}
//Reducer
const initialState = {
    puzzaBase : 100,
    // toppings : ["cheese" , "capsicum"]
}
const reducer = (state=initialState , action) => {
        switch(action.type){
            case ORDER_PIZZA:
                return {
                    // ...state,
                    puzzaBase : puzzaBase-1
                }
            default:
                return state;
        }
}
//Store
//1. Store needs to hold application state.

const store = createStore(reducer)