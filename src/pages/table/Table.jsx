import React, { useEffect, useState } from 'react'
import api from '../../services'
import './table.scss'
import { useDispatch, useSelector } from 'react-redux'
import { studentAction } from '../../store/slices/student.slice'
import { Modal } from 'antd'
export default function Table({ setDisplayUpdateFrom, displayUpdateFrom, setId }) {
    const studentStore = useSelector(store => store.studentStore)
    const dispatch = useDispatch()
    const [idSort, setIdSort] = useState(false)
    useEffect(() => {
        dispatch(studentAction.reverseData())
    }, [idSort])
    const handleDelete = async (userId) => {
        try {
            await api.student.delete(userId)
            dispatch(studentAction.delete(userId))
        } catch (err) {
            console.log('err', err);

        }
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th
                            onClick={() => {
                                setIdSort(!idSort)
                            }}
                        >Id <i className="fa-solid fa-sort-down"></i></th>
                        <th>Name</th>
                        <th>Decs</th>
                        <th>Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentStore.data?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td className='decs'>{item.decs}</td>
                                <td className='button'><button className='update'
                                    onClick={() => {
                                        setId(item.id)
                                        setDisplayUpdateFrom(!displayUpdateFrom)
                                    }}
                                >Update</button>
                                    <button className='delete'
                                        onClick={() => {
                                            Modal.confirm({
                                                title: 'Delete',
                                                content: 'Are you sure you want to delete this student?',
                                                okText: 'Yes',
                                                cancelText:"Close",
                                                onOk: () => { handleDelete(item.id) },
                                                onCancel: () => {
                                                }
                                            })

                                        }}
                                    >Delete</button>
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
