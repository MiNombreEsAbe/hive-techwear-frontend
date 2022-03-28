import API, { LOGIN_USER_KEY } from "../../API";
import { fetchItemsAction } from "./actions";

const api = new API();

export const fetchItems = (data = {}) => {
    return async dispatch => {
        return api
            .getItems(data)
            .then(res => dispatch(fetchItemsAction(res.data, res.gender, res.clotheType)))
            .catch(err => console.log(err.response.data))
    }
}