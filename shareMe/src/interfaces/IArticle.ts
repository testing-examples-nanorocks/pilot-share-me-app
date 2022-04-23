import { ICategory } from "./ICategory"

export interface IArticle {
    id: number,
    title: string,
    description: string,
    url: string
    category: ICategory
}