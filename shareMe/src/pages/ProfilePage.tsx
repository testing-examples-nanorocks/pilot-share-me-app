import React from 'react'
import { Navbar, ProfileContentLoader } from '../components/_index'

type Props = {}

export default function Profile({ }: Props) {
  return (
    <>
      <div className="min-h-full">
        <Navbar />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-10">
            <div>
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                    <p className="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <ProfileContentLoader />
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Full name </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <input type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" placeholder="Andrej Nankov" />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Email </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <input type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300" placeholder="mail@gmail.com" disabled />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="company-website" className="block text-sm font-medium text-gray-700"> Website </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                              <input type="text" name="company-website" id="company-website" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="about" className="block text-sm font-medium text-gray-700"> About </label>
                          <div className="mt-1">
                            <textarea id="about" name="about" rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                          </div>
                          <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700"> Photo </label>
                          <div className="mt-1 flex items-center">
                            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                              <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                            <button type="button" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
                          </div>
                        </div>

                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}