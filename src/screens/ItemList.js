import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCategories } from "../redux/categories/operations";
import { fetchItems } from "../redux/items/operations";
import { addItem } from "../redux/cart/operations";
import Sidebar from "../components/itemList/Sidebar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function ItemList(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const selector = useSelector(state => state);
    const user = selector.user;
    const categories = selector.categories;
    const items = selector.items;
    const [isLoading, setIsLoading] = useState(true);

    const chosenCat = props.category || "male";
    const chosenItem = props.item || "T-Shirts"
    const [category, setCategory] = useState(chosenCat);
    const [item, setItem] = useState(chosenItem);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(fetchItems());
        setIsLoading(false);
    }, []);

    const categoryChange = e => {
        const { value } = e.target;
        setCategory(value);
    }

    const itemChange = clickedItem => setItem(clickedItem);

    const handleAdd = item => {
        dispatch(addItem(item))
    }

    if (!isLoading) console.log(selector)
    
    return (
        <div className="itemList">
            <Sidebar category={chosenCat} categoryChange={categoryChange} itemChange={itemChange} />
            {
                (
                    items.hasOwnProperty(category) &&
                    items[category].hasOwnProperty(item)
                ) ? (
                    <div className="items">
                        {
                            items[category][item].map(prod => {
                                return (
                                    <div className="item" key={prod.id}>
                                        <img src={prod['image']} alt={prod['description']} />
                                        <div className="prodText">
                                            <p className="prodName">{prod['name']}</p>
                                            <p className="prodDesc">{prod['description'].slice(0, 20)}...</p>
                                        </div>
                                        <div className="priceAndAdd">
                                            <p className="price">${prod['price']}</p>
                                            <button onClick={() => handleAdd(prod)}>Add <FontAwesomeIcon icon={faPlus} /></button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                ) : (<div>Loading...</div>)
            }
        </div>
    );
}