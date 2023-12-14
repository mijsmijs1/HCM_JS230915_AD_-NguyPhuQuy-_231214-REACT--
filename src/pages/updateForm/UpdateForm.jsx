import React from 'react'
import api from '../../services'
import './updateForm.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'antd'
import { studentAction } from '../../store/slices/student.slice'
export default function UpdateForm({ id, setDisplayUpdateFrom, displayUpdateFrom }) {
    const studentStore = useSelector(store => store.studentStore)
    let student = studentStore.data.find(s => s.id === id)
    const dispatch = useDispatch()
    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            if(e.target.name.value =='' || e.target.desc.value==''){
                Modal.warn({
                    title: 'Warning',
                    content: 'Please fill all the fields',
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
            let result = await api.student.update(id, student)
            console.log('result', result)
            dispatch(studentAction.update(result?.data?.data))
            e.target.name.value = ''
            e.target.desc.value = ''
            setDisplayUpdateFrom(!displayUpdateFrom)
        } catch (err) {
            console.log('err', err);
        }
    }
    return (
        <>
            <div className='update-form'>
                <form onSubmit={(e) => {
                    handleUpdate(e)
                }}>
                    <i onClick={() => {
                        setDisplayUpdateFrom(!displayUpdateFrom)
                    }} className="fa-solid fa-xmark"></i>
                    <p>Update Student!!!</p>
                    <label>Name</label>
                    <input type='text' id='name' defaultValue={student.name}></input>
                    <label>Description</label>
                    <textarea name="desc" defaultValue={student.decs}></textarea>
                    <button type='submit'>Save</button>
                </form>
            </div>
        </>
    )
}
