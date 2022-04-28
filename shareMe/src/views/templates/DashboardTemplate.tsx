import { IArticle, ICategory } from '@interfaces/_index'
import { Navbar, Articles, DashboardContentLoader, Modal, CategoryFilter } from '@views/organisms/_index'

type Props = {
    articles: IArticle[]
    categories: ICategory[]
}

export default function DashboardTemplate({ articles, categories }: Props) {
  return (
      <>
          <div className="min-h-full">
              <Navbar />
              <header className="bg-white shadow">
                  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between flex-row">
                      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                      <Modal />
                  </div>
              </header>
              <main>

                  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                      <form className='pt-10'>
                          <CategoryFilter categories={categories} />
                      </form>

                      <section className="pt-10 pb-10 lg:pb-20 px-8">
                          <div className="container">
                              <div className="flex flex-wrap -mx-4">
                                  {
                                      articles.map((item: IArticle) => {
                                          return (
                                              <Articles item={item} key={item.id} />
                                          )
                                      })
                                  }
                              </div>
                          </div>
                      </section>
                  </div>
              </main>
          </div>
      </>
  )
}