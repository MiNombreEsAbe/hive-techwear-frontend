import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";

import { getCategories } from "../redux/categories/operations";
import { getCart } from "../redux/cart/operations";
import { fetchItems } from "../redux/items/operations";
import { addItem } from "../redux/cart/operations";
import Sidebar from "../components/itemList/Sidebar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function ItemList(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const selector = useSelector(state => state);
    const items = selector.items;

    useEffect(() => {
        dispatch(getCategories());
        dispatch(fetchItems());
        dispatch(getCart());
    }, []);

    const chosenCat = props.category || "male";
    const [category, setCategory] = useState(chosenCat);
    const catTitle = category.slice(0, 1).toUpperCase() + category.slice(1, category.length);
    const categoryChange = e => {
        const { value } = e.target;
        setCategory(value);
    }

    const chosenItem = props.item || "T-Shirts";
    const [item, setItem] = useState(chosenItem);
    const itemChange = clickedItem => setItem(clickedItem);

    const bothLoaded = items.hasOwnProperty(category) && items[category].hasOwnProperty(item);

    const filteredItems = (
        bothLoaded ?
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
        }) : (<div></div>)
    );

    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = bothLoaded ? Math.ceil(filteredItems.length / 9) : null;
    const handlePageClick = e => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage);
    }

    const handleAdd = item => dispatch(addItem(item));
    
    if (!selector.user.id) history.push('/signin');
    
    return (
        <div className="itemList">
            <Sidebar category={chosenCat} categoryChange={categoryChange} itemChange={itemChange} />
            {
                bothLoaded ? (
                    <div className="itemsWithPages">
                        <p className="itemsTitle">{item}</p>
                        <p className="categorySubtitle">{catTitle}</p>
                        <div className="items">
                            {filteredItems.splice(currentPage * 9, (currentPage + 1) * 9)}
                        </div>
                        <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={totalPages}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}
                        />
                    </div>
                ) : (<div>Loading...</div>)
            }
        </div>
    );
}