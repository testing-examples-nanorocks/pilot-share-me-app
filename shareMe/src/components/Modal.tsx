import React, { useState } from 'react'
import { X } from 'react-feather'
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';

type Props = {}

export default function Modal({ }: Props) {

    const [toggleModal, setToggleModal] = useState(false);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]


    const addArticle = (e: any) => {
        e.preventDefault();

        // setToggleModal(!toggleModal)
    }

    const handleChange = (
        newValue: OnChangeValue<any, false>,
        actionMeta: ActionMeta<any>
    ) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    const handleInputChange = (inputValue: any, actionMeta: any) => {
        console.group('Input Changed');
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    return (
        <div>
            <button type="button"
                className="inline-block px-6 py-2.5 bg-stone-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-stone-700 hover:shadow-lg focus:bg-stone-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stone-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setToggleModal(!toggleModal)}>
                New Article
            </button>
            <div className={`z-10 mt-40 px-10 modal fade fixed top-10 left-0 w-full h-full overflow-x-hidden overflow-y-auto ${toggleModal ? 'show' : 'hidden'}`}
                id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div
                        className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div
                            className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800 " id="exampleModalLabel">
                                Add article
                            </h5>
                            <button type="button"
                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close" onClick={() => setToggleModal(!toggleModal)}>
                                <X />
                            </button>
                        </div>
                        <form onSubmit={addArticle}>
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
                                        />
                                    </div>

                                    <div className='pt-4'>
                                        <label htmlFor="articleUrl" className="form-label inline-block mb-2 text-gray-700"
                                        >Category</label
                                        >
                                        <CreatableSelect
                                            isClearable
                                            onChange={handleChange}
                                            onInputChange={handleInputChange}
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