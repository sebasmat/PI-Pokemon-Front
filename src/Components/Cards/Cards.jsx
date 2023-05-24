import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";
export default function Cards({ viewPokemons }) {

    // const pokemons = useSelector((state) => state.allPokemon);
    const pokemonByName = useSelector((state) => state.pokemonByName)

    //https://e7.pngegg.com/pngimages/979/917/png-clipart-pokemon-pokemon.png
    //https://www.pngall.com/wp-content/uploads/2016/06/Pokemon-High-Quality-PNG.png

    return (
        
            <div className={style.cards_container}>
                {pokemonByName.name ? <Card key={pokemonByName.id}
                    id={pokemonByName.id}
                    name={pokemonByName.name}
                    types={pokemonByName.types}
                    image={pokemonByName.image}
                />
                    :
                            
                    viewPokemons && viewPokemons.map(({ id, name, types, image }) => {
                        return <Card key={id}
                            id={id}
                            name={name}
                            types={types}
                            image={image}
                        />
                    })}
            </div>
    )
}