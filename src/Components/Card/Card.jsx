import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, types, image }) {

    return (
        <div className={style.cardContainer}>
            <div className={style.card} >
                <Link to={`/detail/${id}`} className={style.link}>
                    <h2>{name} </h2>
                    <img src={image} alt='ImagenPokemon' />
                    {types[1] ?
                        <div className={style.twotypes} >
                            <label>{types[0].name}</label>
                            <label>{types[1].name}</label>
                        </div>
                        : <div className={style.onetype} >
                            <label >{types[0].name}</label>
                        </div>
                    }
                </Link>
            </div>
        </div>

    )
}