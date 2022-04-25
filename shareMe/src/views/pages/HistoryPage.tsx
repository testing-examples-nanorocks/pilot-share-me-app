import React from 'react'

import articles from '@mock/ArticlesMock'
import { IArticle } from '@interfaces/_index'
import { HistoryTemplate } from '@views/templates/_index'

type Props = {}

export default function HistoryPage({ }: Props) {
  const articlesDS: IArticle[] = articles.filter(item => item.isDeleted)

  return (
    <HistoryTemplate articles={articlesDS} />
  )
}