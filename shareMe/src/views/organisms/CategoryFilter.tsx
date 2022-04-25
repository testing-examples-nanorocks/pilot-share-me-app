import React from 'react'
import { ICategory } from '@interfaces/_index'

type Props = {
    categories: ICategory[]
}

export default function CategoryFilter({ categories }: Props) {
    return (
        <>
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
                    {categories.map((item: ICategory) => {
                        return <option value={item.id} key={item.id}>{item.name}</option>
                    })}
                </select>
            </div>
        </>
    )
}