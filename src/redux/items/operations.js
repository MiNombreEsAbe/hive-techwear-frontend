import API, { LOGIN_USER_KEY } from "../../API";
import { fetchItemsAction } from "./actions";

const api = new API();

export const fetchItems = () => {
    return async dispatch => {
        return api.getItems()
            // .then(res => dispatch(fetchItemsAction(res.data, res.gender, res.clotheType)))
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data))
    }
}