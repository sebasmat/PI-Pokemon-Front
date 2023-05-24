import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../Redux/actions";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Options.module.css";
import { orderCards, filterCards, clearFilters, filterTypes } from "../../Redux/actions";
export default function Options() {
    const types = useSelector((state) => state.allTypes);
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
        types: '',
        order: '',
        origin: '',
    });

    const handleTypes = (event) => {
        setFilters({ ...filters, types: event.target.value })
        dispatch(filterTypes(event.target.value));
    }

    const handleOrder = (event) => {
        setFilters({ ...filters, order: event.target.value })
        dispatch(orderCards(event.target.value))
    }

    const handleOrigin = (event) => {
        setFilters({ ...filters, origin: event.target.value })
        dispatch(filterCards(event.target.value));
    }

    const clear = () => {
        setFilters({
            types: '',
            order: '',
            origin: '',
        })
        dispatch(clearFilters());
    }

    useEffect(() => {
        dispatch(getTypes());
    }, []);


    return (
        <div className={style.optionsContainer}>
            <div className={style.selectContainer}>
                <select value={filters.types} onChange={handleTypes} >
                    <option value="">Type</option>
                    {types && types.map((type) => {
                        return <option key={type.id} value={type.name}>{type.name}</option>
                    })}
                </select>
            </div>
            <div className={style.selectContainer}>
                <select value={filters.order} onChange={handleOrder}>
                    <option value="">Order</option>
                    <option value="asc">ascending</option>
                    <option value="desc">descending</option>
                    <option value="alfabetic">alphabetical</option>
                    <option value="attack">attack</option>
                </select>
            </div>
            <div className={style.selectContainer}>
                <select value={filters.origin} onChange={handleOrigin}>
                    <option value="">Origin</option>
                    <option value="true" >Database</option>
                    <option value="false">API</option>
                </select>
            </div>
            <div>
                <button onClick={() => { clear() }} className={style.button}>Clear</button>
            </div>

            <Link to={`/form`}>
                <button className={style.button}>Create</button>
            </Link>

        </div>
    )
}