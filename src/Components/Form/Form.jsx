import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../Redux/actions";
import { Link } from "react-router-dom";
import validations from "./validations";
import style from "./Form.module.css";
import backIcon from "../../Icons/back.png";
import pokeball from "../../Images/pokeball.png";
import axios from "axios";
export default function Form() {
    const types = useSelector((state) => state.allTypes);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTypes());
    }, [])

    const [infoPokemon, setInfoPokemon] = useState({
        name: '',
        image: '',
        life: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        type1: '',
        type2: '',
    });

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setErrors(validations({ ...infoPokemon, [property]: value }))
        setInfoPokemon({ ...infoPokemon, [property]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!infoPokemon.name || !infoPokemon.image || !infoPokemon.life || !infoPokemon.attack ||
            !infoPokemon.defense || !infoPokemon.type1 || !infoPokemon.type2) {
            alert("The inputs can not be empty");
        } else if (errors.name || errors.image || errors.life || errors.attack ||
            errors.defense || errors.speed || errors.height || errors.weight || errors.type1 || errors.type2) {
            alert("Errors in the inputs");
        } else {
            axios.post('http://localhost:3001/pokemons', infoPokemon)
                .then(res => alert(res.data))
                .catch(err => alert(err));
            setInfoPokemon({
                name: '',
                image: '',
                life: '',
                attack: '',
                defense: '',
                speed: '',
                height: '',
                weight: '',
                type1: '',
                type2: '',
            })
        }
    }
    return (
        <div>
             <Link to={'/home'}>
                <button className={style.backContainer}>
                    <img src={backIcon} className={style.backImage} alt="backImage"/>
                </button>
            </Link>
            <div className={style.formContainer}>
                <div className={style.container1}>
                    <img src={pokeball} alt="pokeballImage"/>
                </div>
                <div className={style.container2}>

                    <h1 className={style.title}>Create</h1>
                    <form onSubmit={handleSubmit} className={style.form} >
                        <div className={style.inputs} >
                            <label >Name </label>
                            <input type="text" name="name" value={infoPokemon.name} onChange={handleChange} autoComplete="off" />
                            <p className={style.errors}>{errors.name}</p>

                        </div>
                        <div className={style.inputs}>
                            <label >Image </label>
                            <input type="text" name="image" value={infoPokemon.image} onChange={handleChange} autoComplete="off" />
                            <p className={style.errors}>{errors.image}</p>
                        </div>
                        <div className={style.inputs} >
                            <label >Life </label>
                            <input type="text" name="life" value={infoPokemon.life} onChange={handleChange} autoComplete="off" />
                            <p className={style.errors}>{errors.life}</p>
                        </div>
                        <div className={style.inputs} >
                            <label >Attack </label>
                            <input type="text" name="attack" value={infoPokemon.attack} onChange={handleChange} autoComplete="off" />
                            <p className={style.errors}>{errors.attack}</p>
                        </div>
                        <div className={style.inputs}>
                            <label >Defense </label>
                            <input type="text" name="defense" value={infoPokemon.defense} onChange={handleChange} autoComplete="off" />
                            <p className={style.errors}>{errors.defense}</p>
                        </div>
                        <div className={style.inputs}>
                            <label >Speed </label>
                            <input type="text" name="speed" value={infoPokemon.speed} onChange={handleChange} autoComplete="off" />
                            <p className={style.errors}>{errors.speed}</p>
                        </div>
                        <div className={style.inputs}>
                            <label >Height </label>
                            <input type="text" name="height" value={infoPokemon.height} onChange={handleChange} autoComplete="off" />
                            <p className={style.errors}>{errors.height}</p>
                        </div>
                        <div className={style.inputs}>
                            <label >Weight </label>
                            <input type="text" name="weight" value={infoPokemon.weight} onChange={handleChange} autoComplete="off" />
                            <p className={style.errors}>{errors.weight}</p>
                        </div>
                        <div className={style.containerSelect}>
                            <div className={style.selectContainer} >
                                <select name="type1" onChange={handleChange} value={infoPokemon.type1}>
                                    <option value="">Select a type</option>
                                    {types && types.map((type) => {
                                        return <option key={type.id} value={type.id}>{type.name}</option>
                                    })}
                                </select>

                            </div>
                            <p className={style.errors}>{errors.type1}</p>
                        </div>
                        <div className={style.containerSelect}>
                            <div className={style.selectContainer}>
                                <select name="type2" onChange={handleChange} value={infoPokemon.type2}>
                                    <option value="">Select a type</option>
                                    {types && types.map((type) => {
                                        return <option key={type.id} value={type.id}>{type.name}</option>
                                    })}
                                </select>
                            </div>
                            <p className={style.errors}>{errors.type2}</p>
                        </div>

                        <button className={style.button}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}