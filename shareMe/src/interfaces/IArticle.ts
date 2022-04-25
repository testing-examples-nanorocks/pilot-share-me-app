import { ICategory } from "@interfaces/_index"

export default interface IArticle {
    id: number,
    title: string,
    description: string,
    url: string
    category: ICategory,
    isDeleted: boolean
}