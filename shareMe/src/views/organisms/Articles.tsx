import { MousePointer, Trash2 } from 'react-feather'
import { IArticle } from '@interfaces/_index'

type Props = {
    item: IArticle
}

export default function Articles({ item }: Props) {
    return (
        <>
            <div className="w-full md:w-1/3 xl:w-1/3 px-5 shadow-lg rounded-lg">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <div className="px-8 sm:px-9 md:px-7 xl:px-9 pb-1 text-center">
                        <div className='cursor-pointer pt-4'>
                            <Trash2 size={20} className="ml-auto mb-2" color='purple'/>
                        </div>
                        <h3>
                            <a
                                href="#"
                                className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
                            >
                                {item.title}
                            </a>
                        </h3>
                        <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-600 text-white rounded">{item.category.name}</span>
                        <p className="text-base text-body-color leading-relaxed mb-7 truncate hover:text-clip pt-3 cursor-wait" title={ item.description }>
                            {item.description}
                        </p>
                        <a
                            href={item.url}
                            target={'_blank'}
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