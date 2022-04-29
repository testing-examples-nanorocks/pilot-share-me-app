import { ICategory } from "@interfaces/_index"

export default interface IArticle {
    uid?: string,
    id: string,
    title: string,
    description: string,
    url: string
    category: ICategory,
    isDeleted: boolean
}