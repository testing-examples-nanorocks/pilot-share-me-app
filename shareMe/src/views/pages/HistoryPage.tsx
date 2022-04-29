import React from 'react'

import { IArticle } from '@interfaces/_index'
import { HistoryTemplate } from '@views/templates/_index'
import { useAppSelector } from '@hooks/redux'

type Props = {}

export default function HistoryPage({ }: Props) {
  const articlesDS: IArticle[] = useAppSelector(state => state.articlesReducer.articles).filter((item: IArticle) => item.isDeleted)

  return (
    <HistoryTemplate articles={articlesDS} />
  )
}