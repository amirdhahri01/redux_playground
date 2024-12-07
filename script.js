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
        // shop_name:"PIZZA_SHOP"
    };
}
//Reducer
const initialState = {
    pizzaBase : 100,
    // toppings : ["cheese" , "capsicum"]
}
const reducer = (state=initialState , action) => {
        switch(action.type){
            case ORDER_PIZZA:
                return {
                    // ...state,
                    pizzaBase : state.pizzaBase-1
                }
            default:
                return state;
        }
}
//Store
//1. Store needs to hold application state.

const store = createStore(reducer)

//2. It exposes a method called getState wich gives your application access to the current state in the store

console.log("Initial state : " , store.getState());

//3. Registers listeners via subscribe(listener)

const unsubscribe = store.subscribe(() => console.log("Update State : " , store.getState()));

//4. Allow state to be updated via dispatch(action)
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
// store.dispatch({
//     type:ORDER_PIZZA
// })
// store.dispatch({
//     type:ORDER_PIZZA
// })
// store.dispatch({
//     type:ORDER_PIZZA
// })

