
import { IArticle, ICategory } from '@interfaces/_index'
import { DashboardTemplate } from '@views/templates/_index'
import { useAppSelector } from '@hooks/redux';

type Props = {}

export default function Dashboard({ }: Props) {
  const articlesDS: IArticle[] = useAppSelector(state => state.articlesReducer.articles).filter((item: IArticle) => !item.isDeleted)
  const categoriesDS: ICategory[] = useAppSelector(state => state.categoriesReducer.categories);

  return (
    <DashboardTemplate
      articles={articlesDS}
      categories={categoriesDS}
    />
  )
}