/* eslint-disable no-duplicate-case */
import { INIT_ARTICLES, CREATE_ARTICLE, DELETE_ARTICLE } from '@redux/types/articlesType'
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
        case INIT_ARTICLES:
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