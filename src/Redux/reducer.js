import { GET_POKEMONS, GET_TYPES, GET_DETAIL, CLEAN_DETAIL, GET_BY_NAME, ORDER_CARDS, FILTER_CARDS, CLEAR_FILTERS, FILTER_TYPES,NEXT_PAGE,PREV_PAGE } from "./actions";

const initialState = {
    allPokemon: [],
    allPokemonModified: [],
    allTypes: [],
    pokemonDetail: {},
    pokemonByName: {},
    numPage: 1,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return { ...state, allPokemon: action.payload, allPokemonModified: action.payload };
        case GET_TYPES:
            return { ...state, allTypes: action.payload }
        case GET_DETAIL:
            return { ...state, pokemonDetail: action.payload }
        case CLEAN_DETAIL:
            return { ...state, pokemonDetail: action.payload }
        case GET_BY_NAME:
            return { ...state, pokemonByName: action.payload }
        case ORDER_CARDS:
            if(!action.payload){
                return {...state, allPokemon:[...state.allPokemon]}
            } else if (action.payload === 'asc') {
                return { ...state, allPokemon: [...state.allPokemon].sort((a, b) => a.id - b.id) }
            } else if (action.payload === 'desc') {
                return { ...state, allPokemon: [...state.allPokemon].sort((a, b) => b.id - a.id) }
            } else if (action.payload === 'alfabetic') {
                return {
                    ...state, allPokemon: [...state.allPokemon].sort((a, b) => a.name.localeCompare(b.name))
                }
            } else if (action.payload === 'attack') {
                return { ...state, allPokemon: [...state.allPokemon].sort((a, b) => a.attack - b.attack) }
            }
            break;
        case FILTER_CARDS:
            return { ...state, allPokemon: [...state.allPokemon.filter((pok) => pok.created === action.payload)] }
        case CLEAR_FILTERS:
            return { ...state, allPokemon: [...state.allPokemonModified] , pokemonByName: {} }
        case FILTER_TYPES:
            const filter = (pok) => {
                let result = false;
                pok.types.forEach(element => {
                    if (element.name === action.payload) {
                        result = true;
                    }
                });
                return result;
            }

            if(!action.payload){
                return {...state, allPokemon:[...state.allPokemon]}
            }
            return { ...state, allPokemon: [...state.allPokemon.filter((pok) => filter(pok) === true)] }
        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1,
            };
        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1,
            };
        default:
            return { ...state };
    }
}

export default reducer;