import { IArticle } from '@interfaces/_index'
import { CREATE_ARTICLE, UPDATE_ARTICLE, READ_ARTICLE, DELETE_ARTICLE } from '@redux/types/articlesType'

export function readPosts(items: IArticle[]) {
    return {
        type: READ_ARTICLE,
        payload: [...items],
    }
}

export function addPost(item: IArticle) {
    return {
        type: CREATE_ARTICLE,
        payload: item,
    }
}

export function updatePost(item: IArticle) {
    return {
        type: UPDATE_ARTICLE,
        payload: item,
    }
}

export function deletePost(item: IArticle) {
    return {
        type: DELETE_ARTICLE,
        payload: item,
    }
}