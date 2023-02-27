import React, { useState } from 'react'
import Button from '../../../../common/button/Button'

function Edit({ item, data, setData, closeModal }) {
    const { id, name, email, role } = item;
    const [nameState, setNameState] = useState(name);
    const [emailState, setEmailState] = useState(email);
    const [roleState, setRoleState] = useState(role);

    const updateHandler = () => {
        console.log('called')
        const filtered = data.map((item) => {
            if (item.id === id) {
                item.name = nameState;
                item.email = emailState;
                item.role = roleState;
            }
            return item;
        })
        console.log(filtered)
        setData([...filtered]);
        closeModal();
    }
    return (
        <div className='w-[300px] h-[350px] flex justify-center items-center bg-white rounded'>
            <div className='w-[95%] h-[90%] flex items-center justify-center flex-col gap-[5px]'>
                <h1 className='font-bold'>Name</h1>
                <input className='w-[100%] rounded  border-[1px] border-black p-[5px]' type='text' value={nameState} onChange={(e) => setNameState(e.target.value)} />

                <h1 className='font-bold'>Email</h1>
                <input className='w-[100%] rounded border-[1px] border-black p-[5px]' type='text' value={emailState} onChange={(e) => setEmailState(e.target.value)} />

                <h1 className='font-bold'>Role</h1>
                <input className='w-[100%] rounded border-[1px] border-black p-[5px]' type='text' value={roleState} onChange={(e) => setRoleState(e.target.value)} />

                <div className='flex flex-col gap-[10px] mt-[15px]'>
                    <div
                        role='button'
                        onClick={() => updateHandler()}
                    >
                        <Button>Update</Button>
                    </div>
                    <div onClick={closeModal}>
                        <Button>Cancel</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Edit