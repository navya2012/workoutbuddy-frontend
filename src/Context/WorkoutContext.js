import axios from 'axios'
import React, {  createContext, useState } from 'react'
import useAuthContext from '../Hooks/useAuthContext'


export const WorkoutDataList = createContext( )

const WorkoutContext = ({children}) => {
  const {user} = useAuthContext()
  //console.log(user, user?.token)

    const [workoutData, setWorkoutData] = useState(null)
    const [form, setForm] = useState({
        title: '',
        reps: '',
        load: ''
      })

  //get
  const getWorkoutsData = async () => {

    const response = await axios.get('https://workoutbuddy-backend-1.onrender.com/api/workouts', {
      headers:{
        "Authorization" : `Bearer ${user.token}`
      }
    })
    const data = response.data
    setWorkoutData(data)
    
  }

  //update data
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: '',
    reps: '',
    load: ''
  })

  return (
    <>
        <WorkoutDataList.Provider value={{workoutData,setWorkoutData,getWorkoutsData,form,setForm,updateForm,setUpdateForm
        }}
        >
            {children}
        </WorkoutDataList.Provider>
    </>
  )
}

export default WorkoutContext