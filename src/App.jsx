import React, { useEffect, useState } from 'react'
import RouterIndex from './routes/RouteIndex'
import api from "./services"
import { studentAction } from './store/slices/student.slice'
import { useDispatch, useSelector } from 'react-redux'
export default function App() {
  const studentStore = useSelector(store => store.studentStore)
  console.log('studentStore', studentStore);
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      try {
        let result = await api.student.findAll();
        dispatch(studentAction.setData(result?.data?.data));
      } catch (err) {
        console.log('err', err);
      }
    };
    fetchData();
  }, []);
  return (
    <RouterIndex />
  )
}
