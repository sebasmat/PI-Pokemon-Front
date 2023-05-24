import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_BY_NAME = "GET_BY_NAME";
export const ORDER_CARDS = "ORDER_CARDS";
export const FILTER_CARDS = "FILTER_CARDS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const FILTER_TYPES = "FILTER_TYPES";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";

export const getPokemons = () => {
    const endpoint = '/pokemons';
    return (dispatch) => {
        axios.get(endpoint)
            .then((response) => {
                return dispatch({
                    type: GET_POKEMONS,
                    payload: response.data,
                })
            })
    }
}
export const getTypes = () => {
    const endpoint = '/types';
    return (dispatch) => {
        axios.get(endpoint)
            .then((response) => {
                return dispatch({
                    type: GET_TYPES,
                    payload: response.data,
                })
            })
    }
}

export const getDetail = (id)=>{
    const endpoint = `/pokemons/${id}`;
    return (dispatch)=>{
        axios.get(endpoint)
        .then((response)=>{
            return dispatch({
                type:GET_DETAIL,
                payload:response.data,
            })
        })
    }
}

export const cleanDetail = ()=>{
    return {
        type: CLEAN_DETAIL,
        payload: {},
    }
}

export const getByName = (name)=>{
    const endpoint = `/pokemons?name=${name}`;
    return (dispatch)=>{
        axios.get(endpoint)
        .then((response)=>{
            return dispatch({
                type: GET_BY_NAME,
                payload: response.data,
            })
        })
    }
}

export const orderCards = (order)=>{
    return {
        type: ORDER_CARDS,
        payload: order,
    }
}

export const filterCards = (filter)=>{
    return{
        type: FILTER_CARDS,
        payload: filter,
    }
}

export const clearFilters = ()=>{
    return {
        type: CLEAR_FILTERS,
    }
}

export const filterTypes = (type)=>{
    return {
        type: FILTER_TYPES,
        payload:type
    }
}

export function prevPage() {
    return {
      type: PREV_PAGE,
    };
  }
  
  export function nextPage() {
    return {
      type: NEXT_PAGE,
    };
  }