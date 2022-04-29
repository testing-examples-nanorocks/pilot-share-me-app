/* eslint-disable no-duplicate-case */
import { INIT_CATEGORIES, CREATE_CATEGORY, DELETE_CATEGORY } from '@redux/types/categoriesType'
import { IAction, ICategory } from '@interfaces/_index'

interface categoriesState {
    categories: ICategory[],
    category: ICategory | null
}

const initialState: categoriesState = {
    categories: [],
    category: null
}

export default function categoriesReducer(state: categoriesState = initialState, action: IAction<any>) {
    switch (action.type) {
        case INIT_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }

        case CREATE_CATEGORY:
            return {
                ...state,
                category: action.payload,
                categories: [
                    action.payload,
                    ...state.categories
                ]
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                category: action.payload,
                // categories: state.articles.filter(item => item.id !== action.payload.id)
            }
        default:
            return state
    }
}