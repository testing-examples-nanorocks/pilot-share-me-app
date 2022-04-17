import React from 'react'
import { Navbar } from '../components/_index'

type Props = {}

export default function Dashboard({ }: Props) {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            List and submit form of articles

            <section className="pt-20 pb-10 lg:pb-20 bg-[#F3F4F6]">
              <div className="container">
                <div className="flex flex-wrap -mx-4">
                  {
                    [1,2,3,4].map((item, index) => {
                      return (
                        <div className="w-full md:w-1/3 xl:w-1/3 px-5">
                          <div className="bg-white rounded-lg overflow-hidden mb-10">
                            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                              <h3>
                                <a
                                  href="javascript:void(0)"
                                  className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
                                >
                                  The ultimate UX and UI guide to card design
                                </a>
                              </h3>
                              <p className="text-base text-body-color leading-relaxed mb-7">
                                Lorem ipsum dolor sit amet pretium consectetur adipiscing
                                elit. Lorem consectetur adipiscing elit.
                              </p>
                              <a
                                href="javascript:void(0)"
                                className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-dark transition"
                              >
                                View Details
                              </a>
                            </div>
                          </div>
                        </div>
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