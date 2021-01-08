import * as actionTypes from "./Item.types"
import { ItemState } from "./Item.types"

const initialState: ItemState  = {
    loading: false,
    itemList: []
}

function items(state = initialState, action: { type: string; payload: any }) {
    switch (action.type) {
        case LIST_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case LIST_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
            }

        case LIST_LOAD_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            }

        default:
            return state
    }
}
export default items
