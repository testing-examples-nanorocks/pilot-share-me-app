/* eslint-disable no-duplicate-case */
import { CREATE_ARTICLE, UPDATE_ARTICLE, READ_ARTICLE, DELETE_ARTICLE } from '@redux/types/articlesType'
import { IAction, IArticle } from '@interfaces/_index'

interface articlesState {
    articles: IArticle[],
    article: IArticle | null
}

const initialState: articlesState = {
    articles: [],
    article: null
}

export default function articlesReducer(state: articlesState = initialState, action: IAction<any>) {
    switch (action.type) {
        case READ_ARTICLE:
            return {
                ...state,
                articles: action.payload
            }

        case CREATE_ARTICLE:

            return {
                ...state,
                article: action.payload,
                articles: [
                    action.payload,
                    ...state.articles
                ]
            }
        case UPDATE_ARTICLE: // todo 
            return {
                ...state
            }
        case DELETE_ARTICLE:
            return {
                ...state,
                article: action.payload,
                // articles: state.articles.filter(item => item.id !== action.payload.id)
            }
        default:
            return state
    }
}