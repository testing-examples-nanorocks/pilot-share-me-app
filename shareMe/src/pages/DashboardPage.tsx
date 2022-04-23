import { Navbar, Articles, DashboardContentLoader, Modal } from '../components/_index'
import { IArticle } from '../interfaces/_index'
import articles from '../mock/ArticlesMock'

type Props = {}

export default function Dashboard({ }: Props) {
  const articlesDS: IArticle[] = articles.filter(item => !item.isDeleted)

  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between flex-row">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <input type="text" className="search-click rounded-md border-stone-200 focus:border-purple-600" name="" placeholder="Search any article by word ..." />
            <Modal />
          </div>
        </header>
        <main>

          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <form className='pt-10'>
              <div className="mb-3">
                <select className="form-select form-select-lg mb-3
                        appearance-none
                        block
                        w-full
                        px-4
                        py-2
                        text-xl
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none" aria-label=".form-select-lg example"
                  defaultValue={1}
                >
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <DashboardContentLoader />
            </form>

            <section className="pt-10 pb-10 lg:pb-20 bg-[#F3F4F6]">
              <div className="container">
                <div className="flex flex-wrap -mx-4">
                  {
                    articlesDS.map((item: IArticle) => {
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