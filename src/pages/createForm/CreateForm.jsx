import React from 'react'
import api from '../../services'
import { useDispatch } from 'react-redux'
import { studentAction } from '../../store/slices/student.slice'
import { Modal } from 'antd'
import './createFrom.scss'
export default function CreateForm({ displayCreateFrom, setDisplayCreateFrom }) {
    const dispatch = useDispatch()
    const handleCreate = async (e) => {
        e.preventDefault()
        try {
            if(e.target.name.value =='' || e.target.desc.value==''){
                Modal.warn({
                    title: 'Warning',
                    content: 'Please fill all the fields!',
                })
                return
            }
            if(e.target.desc.value.length >255){
                Modal.warn({
                    title: 'Warning',
                    content: 'Description is too long!',
                })
                return
            }
            let student = {
                name: e.target.name.value,
                decs: e.target.desc.value
            }
            let result = await api.student.create(student)
            dispatch(studentAction.create(result?.data?.data))
            e.target.name.value = ''
            e.target.desc.value = ''
            setDisplayCreateFrom(!displayCreateFrom)
        } catch (err) {
            console.log('err', err);
        }
    }
    return (
        <>
            <div className='create-form'>
                <form onSubmit={(e) => {
                    handleCreate(e)
                }}>
                    <i onClick={() => {
                        setDisplayCreateFrom(!displayCreateFrom)
                    }} className="fa-solid fa-xmark"></i>
                    <p>Create Student!!!</p>
                    <label>Name</label>
                    <input type='text' id='name' placeholder='Name of student'></input>
                    <label>Description</label>
                    <textarea name="desc" placeholder='Description of student'></textarea>
                    <button type='submit'>Create</button>
                </form>
            </div>
        </>
    )
}
