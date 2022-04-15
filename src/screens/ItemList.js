import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";

import { getCategories } from "../redux/categories/operations";
import { getCart, updateItem, addItem } from "../redux/cart/operations";
import { fetchItems } from "../redux/items/operations";
import Sidebar from "../components/itemList/Sidebar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function ItemList(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const selector = useSelector(state => state);
    const items = selector.items;
    const carts = selector.cart;
    const itemsInCart = {};

    for (let i = 0; i < carts.length; i++) {
        itemsInCart[carts[i]['product']['id']] = carts[i]['quantity']
    }

    console.log(itemsInCart)

    useEffect(() => {
        dispatch(getCategories());
        dispatch(fetchItems());
        dispatch(getCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        {
                            (prod.id in itemsInCart) ?
                            (<div className="addAndRemove">
                                <button onClick={() => handleRemove(prod)}><FontAwesomeIcon icon={faMinus} /></button>
                                <input value={itemsInCart[prod.id]} readOnly />
                                <button onClick={() => handleAdd(prod)}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>) :
                            (<button onClick={() => handleAdd(prod)}>Add <FontAwesomeIcon icon={faPlus} /></button>)
                        
                        }
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

    const handleAdd = item => {
        let itemExists = false;
        let existingItem;

        for(let i = 0; i < carts.length; i++) {
            if(carts[i]['product']['id'] === item['id']) {
                itemExists = true;
                existingItem = carts[i];
                break
            }
        }

        if (itemExists) {
            const reqData = {
                quantity: existingItem.quantity + 1
            }

            dispatch(updateItem(reqData, existingItem['id']))
        } else {
            const reqData = {
                product: item['id'],
                quantity: 1
            }

            dispatch(addItem(reqData))
        }
    };

    const handleRemove = item => {
        let existingItem;

        // itemsInCart[item['id']] -= 1;
        if (itemsInCart[item['id']] === 1) window.location.reload(false)

        for(let i = 0; i < carts.length; i++) {
            if(carts[i]['product']['id'] === item['id']) {
                existingItem = carts[i];
                break
            }
        }

        console.log(itemsInCart)
        
        dispatch(updateItem({ quantity: (existingItem.quantity - 1).toString() }, existingItem['id']))
        
        // if (itemExists) {
        //     const reqData = {
        //         quantity: existingItem.quantity + 1
        //     }

        //     dispatch(updateItem(reqData, existingItem['id']))
        // } else {
        //     const reqData = {
        //         product: item['id'],
        //         quantity: 1
        //     }

        //     dispatch(addItem(reqData))
        // }
    };
    
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