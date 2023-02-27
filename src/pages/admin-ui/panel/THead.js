import React, { useState } from 'react'

function THead() {
    const [checked, setChecked] = useState(false);

    const selectAllHandler = (e) => {
        let checkboxes = document.querySelectorAll('.tRow-checkbox');
        if (!e.target.checked === true) {
            checkboxes.forEach((checkbox) => {
                checkbox.children[0].checked = false;
                checkbox.parentElement.style.background = '#fff'
            })
        }
        else {
            checkboxes.forEach((checkbox) => {
                checkbox.children[0].checked = true
                checkbox.parentElement.style.background = '#e0e0e0'
            })
        }
        setChecked(e.target.value);

    }

    return (
        <thead>
            <tr className='admin-table-row'>
                <th className='admin-table-heading tHead-checkbox '>
                    <input id='checkBoxHead' className='checkbox-custom' type="checkbox" value={checked} onChange={selectAllHandler} />
                </th>
                <th className='admin-table-heading'>ID</th>
                <th className='admin-table-heading'>Name</th>
                <th className='admin-table-heading'>Email</th>
                <th className='admin-table-heading'>Role</th>
                <th className='admin-table-heading'>Action</th>
            </tr>
        </thead>
    )
}

export default THead