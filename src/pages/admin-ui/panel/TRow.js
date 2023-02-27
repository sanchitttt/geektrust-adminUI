import React, { useState } from 'react'
import EditIcon from '../../../common/EditIcon';
import DeleteIcon from '../../../common/DeleteIcon';
import { Modal } from '@mui/material';
import Edit from './modals/Edit';
import { updateUIAndPaginationOnDelete } from '../utils';


function TBody({ data, item, setData, setTotalPages }) {
    const [showModal, setShowModal] = useState(false);

    const deleteHandler = () => {
        const filtered = data.filter((dataItem) => dataItem.id !== item.id);
        updateUIAndPaginationOnDelete(filtered,setData,setTotalPages);
    }

    const checkboxChangeHandler = (e) => {
        if (e.target.checked) e.target.parentElement.parentElement.style.background = '#e0e0e0'
        else e.target.parentElement.parentElement.style.background = '#fff'
    }

    return (
        <tr key={item.id} className='admin-table-row hover:bg-gray-200'>
            <td className='admin-table-column tRow-checkbox'><input id={item.id} type='checkbox' onChange={(e) => checkboxChangeHandler(e)} /></td>
            <td className='admin-table-column'>{item.id}</td>
            <td className='admin-table-column'>{item.name}</td>
            <td className='admin-table-column'>{item.email}</td>
            <td className='admin-table-column'>{item.role}</td>
            <td className='admin-table-column'>
                <div className='flex'>
                    <div onClick={() => setShowModal(true)}>
                        <EditIcon />
                    </div>
                    <div onClick={deleteHandler}>
                        <DeleteIcon />
                    </div>
                </div>
            </td>
            <Modal open={showModal}>
                <div className='w-[100%] h-[100%] flex items-center justify-center'>
                    <Edit item={item} data={data} setData={setData} closeModal={() => setShowModal(false)} />
                </div>
            </Modal>
        </tr>
    )
}

export default TBody