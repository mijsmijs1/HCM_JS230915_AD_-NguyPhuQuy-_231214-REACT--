import React, { useState } from 'react'
import './homepage.scss'
import { useSelector, useDispatch } from 'react-redux'
import Table from './table/Table.jsx'
import CreateForm from './createForm/CreateForm.jsx'
import UpdateForm from './updateForm/UpdateForm.jsx'
export default function Homepage() {
    const [displayCreateFrom, setDisplayCreateFrom] = useState(false)
    const [displayUpdateFrom, setDisplayUpdateFrom] = useState(false)
    const [id, setId] = useState(null)
    return (
        <>
            <div className='app'>
                <div className='app-container'>
                    <button className='create-button' onClick={() => {
                        setDisplayCreateFrom(!displayCreateFrom)
                    }}>Create Student</button>
                        {displayCreateFrom && <CreateForm displayCreateFrom={displayCreateFrom} setDisplayCreateFrom={setDisplayCreateFrom}/>}
                        {displayUpdateFrom && <UpdateForm id={id} setDisplayUpdateFrom={setDisplayUpdateFrom} displayUpdateFrom={displayUpdateFrom}/>}
                    <div className='title'>
                    <h4>Student List</h4>
                    </div>
                    <div className='table'>
                    <Table setDisplayUpdateFrom={setDisplayUpdateFrom} displayUpdateFrom={displayUpdateFrom} setId={setId} />
                    </div>
                </div>
            </div>
        </>
    )
}
