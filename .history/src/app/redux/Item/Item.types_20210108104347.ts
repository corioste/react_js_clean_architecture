import { Item } from "../../../domain/entities/Item"

export const LIST_LOAD_REQUEST = "LIST_LOAD_REQUEST"
export const LIST_LOAD_SUCCESS = "LIST_LOAD_SUCCESS"
export const LIST_LOAD_FAILURE = "LIST_LOAD_FAILURE"

export interface ItemList {
    item: Item
  }
  
export interface RefreshListState {
    itemList: ItemList[]
    loading: boolean
}

interface ListLoadRequestAction {
    type: typeof LIST_LOAD_REQUEST
}

interface ListLoadSuccessAction {
    type: typeof LIST_LOAD_SUCCESS,
    payload: ItemList[]
}

interface ListLoadFailureAction {
    type: typeof LIST_LOAD_FAILURE
}

export type RefreshListActionTypes = ListLoadRequestAction | ListLoadSuccessAction | ListLoadFailureAction

// export type ItemProps = {
//     items: Item[]
//     refreshList: () => Item[]
// }

// export interface Item {
//     id: number
//     name: string
// }
