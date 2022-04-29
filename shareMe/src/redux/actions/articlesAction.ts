import { IArticle } from '@interfaces/_index'
import { INIT_ARTICLES, CREATE_ARTICLE, DELETE_ARTICLE } from '@redux/types/articlesType'

export function initArticles(items: IArticle[]) {
    return {
        type: INIT_ARTICLES,
        payload: items,
    }
}

export function addArticle(item: IArticle) {
    return {
        type: CREATE_ARTICLE,
        payload: item,
    }
}


export function deleteArticles(item: IArticle) {
    return {
        type: DELETE_ARTICLE,
        payload: item,
    }
}