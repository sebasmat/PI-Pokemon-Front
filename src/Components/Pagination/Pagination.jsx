import { useSelector,useDispatch } from "react-redux"
import { nextPage, prevPage } from "../../Redux/actions";
import style from "./Pagination.module.css";
export default function Pagination({ cantPages }) {
    const { numPage } = useSelector((state) => state);
    const dispatch = useDispatch();
    const next = () => {
        dispatch(nextPage());
    }
    const prev = ()=> {
        dispatch(prevPage());
    }
    return (
        <div className={style.paginationContainer}>
            {numPage > 1 && (
                <div className={style.prevContainer}>
                    <button onClick={prev} className={style.button}>Previous Page</button>
                    
                </div>
            )}
            <h2 className={style.page}>{numPage}</h2>
            {numPage < cantPages && (
                <div className={style.nextContainer}>
                    
                    <button onClick={next} className={style.button}>Next Page</button>
                </div>
            )}
        </div>
    )
}