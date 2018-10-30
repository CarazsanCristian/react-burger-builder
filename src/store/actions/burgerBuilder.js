import * as actionTypes from './actionsTypes';
import axios from "../../axios-orders";

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingrName: name
    }
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingrName: name
    }
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};
export const fetchIngredientFail=()=>{
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILD
    }
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientFail());
            });
    }
};