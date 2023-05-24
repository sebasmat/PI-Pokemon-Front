import {Link} from "react-router-dom";
import style from "./LandingPage.module.css";
import imgLanding from '../../Images/logo.png';
export default function LandingPage(){
    return (
        <div className={style.container} >
            <div className={style.logoContainer}>
                <img src={imgLanding}/>
            </div>
            <div className={style.link} >
            <Link to={`/home`}>
            <button className={style.button} >Home Page</button>
            </Link>
            </div>
        </div>
    )
}