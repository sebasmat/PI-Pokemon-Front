import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, cleanDetail } from "../../Redux/actions";
import { Link } from "react-router-dom";
import iconlife from "../../Icons/hearts.png";
import iconattack from "../../Icons/attack.png";
import icondefense from "../../Icons/defense.png";
import iconspeed from "../../Icons/speed.png";
import backIcon from "../../Icons/back.png";


export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.pokemonDetail);

    useEffect(() => {
        dispatch(getDetail(id));
        return () => {
            dispatch(cleanDetail());
        }
    }, [])
    return (
        <div>
            <Link to={'/home'}>
                <button className={style.backContainer}>
                    <img src={backIcon} className={style.backImage} alt="backImage" />
                </button>
            </Link>
            <div className={style.containerDetail}>
                <div className={style.containerAll}>
                    <div className={style.container1}>
                        <div className={style.imageContainer}>
                            {detail.image 
                            ? <img src={detail.image} alt="ImagenDetail" />
                            : <p>...Loading</p>}
                            
                        </div>
                        <div className={style.nameContainer}>
                            <h2>{detail.name}</h2>
                        </div>
                    </div>
                    <div className={style.container2}>
                        <div className={style.typesAndHyWContainer}>
                            <div className={style.typesContainer}>
                                {detail.types ?
                                    detail.types.map((element) => {
                                        return <h2> {element.name} </h2>
                                    })
                                    :
                                    <h2>...Loading</h2>
                                }
                            </div>
                            <div className={style.HyWContainer}>
                                <h2>{detail.height / 10} M</h2>
                                <h2>{detail.weight / 10} KG</h2>
                            </div>
                            <div className={style.meditions}>
                                <h3>Height</h3>
                                <h3>Weight</h3>
                            </div>
                        </div>
                        <div className={style.statsContainer}>
                            <div className={style.titleContainer}>
                                <h2>Basics Stats</h2>
                            </div>
                            <div className={style.basicStatsContainer}>
                                <div className={style.hpattContainer}>
                                    <h3 className={style.hpContainer}>
                                        <div className={style.lifeimgContainer}>
                                            <img src={iconlife} alt="iconLife"/>
                                        </div>
                                        : {detail.life}
                                    </h3>
                                    <h3 className={style.attackContainer}>
                                        <div className={style.attackimgContainer}>
                                            <img src={iconattack} alt="iconAttack"/>
                                        </div>
                                        : {detail.attack}
                                    </h3>
                                </div>
                                <div className={style.dfspContainer}>
                                    <h3 className={style.defenseContainer}>
                                        <div className={style.defenseimgContainer}>
                                            <img src={icondefense} alt="iconDefense"/>
                                        </div>
                                        : {detail.defense}
                                    </h3>
                                    <h3 className={style.speedContainer}>
                                        <div className={style.speedimgContainer}>
                                            <img src={iconspeed} alt="iconSpeed"/>
                                        </div>
                                        : {detail.speed}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}