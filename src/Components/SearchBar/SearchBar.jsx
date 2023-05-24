import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../Redux/actions";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";
import SearchIcon from "../../Icons/buscar3.png";
import backIcon from "../../Icons/back.png";
export default function SearchBar() {

    const [pokemonName, setPokemonName] = useState("");
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getByName(pokemonName))
        setPokemonName("");
    }

    const handleChange = (event) => {
        setPokemonName(event.target.value);
    }

    return (
        <div className={style.searchBarContainer}>
            <div>
                <Link to={'/'}>
                    <button className={style.backContainer}>
                        <img src={backIcon} className={style.backImage} alt="backIcon" />
                    </button>
                </Link>
                <input className={style.input} type="text" name="name" onChange={handleChange} placeholder="Pokemon Name" value={pokemonName} />
            </div>
            <div>
                <button className={style.button} onClick={() => { handleClick(); }}>
                    <img className={style.image} src={SearchIcon} alt="SearchIcon" />
                </button>
            </div>

        </div>
    )
}