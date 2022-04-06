import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/categories/operations";
import { fetchItems } from "../redux/items/operations";

export default function ItemList() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(fetchItems());
    }, []);

    console.log(selector)

    return (
        <div>Here!</div>
    );
}