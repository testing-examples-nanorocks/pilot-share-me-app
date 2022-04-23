import React from 'react'
import { Navbar, Table } from '../components/_index'
import articles from '../mock/ArticlesMock'
import { IArticle } from '../interfaces/_index'

type Props = {}

export default function HistoryPage({ }: Props) {
  const articlesDS: IArticle[] = articles.filter(item => item.isDeleted)
  
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">History</h1>
          </div>
        </header>
        <main>
          
          <div className="max-w-1xl mx-auto pt-10 mx-10">
            <div className="p-4 bg-white rounded-lg border shadow-md sm:p-8 ">
              <Table articles={articlesDS} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}