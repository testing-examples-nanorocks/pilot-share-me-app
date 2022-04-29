import { useEffect, useState } from 'react'
import { X } from 'react-feather'
import CreatableSelect from 'react-select/creatable';
import { OnChangeValue } from 'react-select';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import ICategory from '@interfaces/ICategory';
import { IArticle, IOption } from '@interfaces/_index';
import { FirebaseAddDoc } from '@services/_index';
import { v4 as uuidv4 } from 'uuid';
import { addArticle } from '@redux/actions/articlesAction';
import { addCategory } from '@redux/actions/categoriesAction';

type Props = {}

export default function Modal({ }: Props) {

    const [toggleModal, setToggleModal] = useState(false);
    const [options, setOptions] = useState<IOption[]>([])
    const categoriesDS: ICategory[] = useAppSelector(state => state.categoriesReducer.categories);

    const [url, setUrl] = useState<string>("")
    const [categorySelect, setCategory] = useState<{ value: string, label: string, __isNew__?: boolean }>({ value: "", label: "" })

    const dispatch = useAppDispatch()

    useEffect(() => {
        const optionsDS: IOption[] = categoriesDS.map((item: ICategory) => ({ value: item.uid.toString(), label: item.name[0].toUpperCase() + item.name.substring(1) }))
        setOptions(optionsDS)
    }, [categoriesDS])

    const addArticleToDbAndStore = (e: any) => {
        e.preventDefault();

        if (categorySelect.value === '') {
            alert("Add or select category")
            return
        }

        // TODO add service to get url title and description

        const article: IArticle = {
            url: url,
            isDeleted: false,
            category: {
                id: categorySelect.value,
                name: categorySelect.label,
                uid: ""
            },
            title: "TODO title",
            description: "TODO description",
            id: uuidv4(),
            uid: ''
        }

        if (categorySelect.__isNew__ !== undefined) {
            FirebaseAddDoc('categories', article.category).then((res: string) => {
                dispatch(addCategory({ ...article.category, uid: res }))
            })
        }

        FirebaseAddDoc('articles', article).then((res: string) => {
            dispatch(addArticle({ ...article, uid: res }))
        })

        setToggleModal(!toggleModal)

        setUrl("")
        setCategory({ value: "", label: "" })
    }

    const handleChange = (newValue: OnChangeValue<any, false>) => setCategory(newValue);

    return (
        <div>
            <button type="button"
                className="inline-block px-6 py-2.5 bg-stone-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setToggleModal(!toggleModal)}>
                New Article
            </button>
            <div className={`z-10 mt-40 px-10 modal fade fixed top-10 left-0 w-full h-full overflow-x-hidden overflow-y-auto ${toggleModal ? 'show' : 'hidden'}`}
                id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800 " id="exampleModalLabel">
                                New article
                            </h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close" onClick={() => setToggleModal(!toggleModal)}>
                                <X />
                            </button>
                        </div>
                        <form onSubmit={addArticleToDbAndStore} noValidate={false}>
                            <div className="modal-body relative p-4">
                                <div>
                                    <div>
                                        <label htmlFor="articleUrl" className="form-label inline-block mb-2 text-gray-700"
                                        >URL</label
                                        >
                                        <input
                                            type="url"
                                            className="form-control
                                                    block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-base
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:border-purple-600 focus:bg-white focus:outline-none
                                                    "
                                            id="articleUrl"
                                            placeholder="ex. youtube.com/1344sd24"
                                            required
                                            onChange={(e: any) => setUrl(e.target.value)}
                                            value={url}
                                        />
                                    </div>

                                    <div className='pt-4'>
                                        <label htmlFor="articleUrl" className="form-label inline-block mb-2 text-gray-700"
                                        >Category</label
                                        >
                                        <CreatableSelect
                                            isClearable
                                            onChange={handleChange}
                                            options={options}
                                            className='focus:border-purple-600'
                                            placeholder='Select or create new category'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button type="submit"
                                    className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                >Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}