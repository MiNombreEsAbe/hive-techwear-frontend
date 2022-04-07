import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCategories } from "../redux/categories/operations";
import { fetchItems } from "../redux/items/operations";

export default function ItemList(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const selector = useSelector(state => state);
    const user = selector.user;
    const categories = selector.categories;
    const items = selector.items;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(fetchItems());
        setIsLoading(false);
    }, []);

    const [category, setCategory] = useState("male");
    const [item, setItem] = useState("");

    if (!isLoading) console.log(items)
    
    return (
        <div>
            {/* {
                categories.map(cat => <p key={cat.id}>{cat.name}</p>)
            } */}
        </div>
    );
}