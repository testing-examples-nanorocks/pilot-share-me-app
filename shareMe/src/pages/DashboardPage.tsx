import { Navbar, Articles } from '../components/_index'

type Props = {}

export default function Dashboard({ }: Props) {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <input type="text" className="search-click rounded-md border-stone-200" name="" placeholder="Search any article by word" />
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <form className='pt-10'>
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
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
                        focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none" aria-label=".form-select-lg example">
                    <option selected>Filter by category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </form>

            <section className="pt-10 pb-10 lg:pb-20 bg-[#F3F4F6]">
              <div className="container">
                <div className="flex flex-wrap -mx-4">
                  {
                    [1, 2, 3, 4].map((item, index) => {
                      return (
                        <Articles item={item} key={index} />
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