import React from 'react'
import { MousePointer, Trash2 } from 'react-feather'
type Props = {
    item: any
}

export default function Articles({ item }: Props) {
    return (
        <>
            <div className="w-full md:w-1/3 xl:w-1/3 px-5">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <div className="px-8 sm:px-9 md:px-7 xl:px-9 pb-6 text-center">
                        <div className='cursor-pointer pt-4'>
                            <Trash2 size={20} className="ml-auto mb-2" color='purple'/>
                        </div>
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
                            <MousePointer className='inline' size={20}/> View Details
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}