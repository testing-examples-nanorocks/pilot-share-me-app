import React from 'react'
import { IArticle, ICategory } from '@interfaces/_index'

type Props = {
    categories: ICategory[]
    articles: IArticle[]
}

export default function CategoryFilter({ categories, articles }: Props) {
    return (
        <>
            <div className="mb-3 mx-4">
                {articles.length !== 0 && (
                    <form>
                        <div className="mb-6">
                            <label htmlFor="article-search" className="block mb-2 text-sm font-medium text-gray-900">Search articles</label>
                            <input type="article-search" id="article-search" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Search by word almost anything ..." required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Filter by category</label>
                            <select className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " aria-label=".form-select-lg example"
                                defaultValue={1}
                            >
                                {categories.map((item: ICategory) => {
                                    return <option value={item.uid} key={item.uid}>{item.name[0].toUpperCase() + item.name.substring(1)}</option>
                                })}
                            </select>
                        </div>
                    </form>
                )}
            </div>
        </>
    )
}