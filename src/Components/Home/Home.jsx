import {useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import { getPokemons } from "../../Redux/actions";
import Cards from '../Cards/Cards';
import Options from "../Options/Options";
import Pagination from "../Pagination/Pagination";
export default function Home(){
    const dispatch = useDispatch();
    const pokemons = useSelector((state)=> state.allPokemon)
    const pokemonName = useSelector((state)=> state.pokemonByName)
    const { numPage } = useSelector((state) => state);

    
    let desde = (numPage - 1) * 12; 
    let hasta = numPage * 12; 
  
   
    let cantPages = Math.floor(pokemons.length / 12);

    if(pokemonName){
        
    }
  
    let viewPokemons = pokemons?.slice(desde, hasta); // [{1}{2}{3}{4}][{5}{6}{7}{}]

    useEffect(()=>{
        dispatch(getPokemons())
    },[])
    return (
        <>
            <Options/>
            <Cards viewPokemons = {viewPokemons}/>
            <Pagination cantPages ={cantPages} />
        </>
    )
}