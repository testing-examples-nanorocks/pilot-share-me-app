import { ICategory } from '@interfaces/_index'
import { INIT_CATEGORIES, CREATE_CATEGORY, DELETE_CATEGORY } from '@redux/types/categoriesType'

export function initCategories(items: ICategory[]) {
    return {
        type: INIT_CATEGORIES,
        payload: items,
    }
}

export function addCategory(item: ICategory) {
    return {
        type: CREATE_CATEGORY,
        payload: item,
    }
}


export function deleteCategory(item: ICategory) {
    return {
        type: DELETE_CATEGORY,
        payload: item,
    }
}