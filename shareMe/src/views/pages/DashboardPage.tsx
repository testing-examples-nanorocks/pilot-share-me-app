
import { IArticle, ICategory } from '@interfaces/_index'
import articles from '@mock/ArticlesMock'
import categories from '@mock/CategoriesMock'
import { DashboardTemplate } from '@views/templates/_index'

type Props = {}

export default function Dashboard({ }: Props) {
  const articlesDS: IArticle[] = articles.filter(item => !item.isDeleted)
  const categoriesDS: ICategory[] = categories;

  return (
    <DashboardTemplate 
      articles={articlesDS}
      categories={categoriesDS}
    />
  )
}