import React, { useContext, useEffect } from 'react'
import { WorkoutDataList } from '../../Context/WorkoutContext'
import axios from 'axios'
import './RecordStyles.css'
import useAuthContext from '../../Hooks/useAuthContext'

const Records = () => {
    const { workoutData, getWorkoutsData ,setUpdateForm} = useContext(WorkoutDataList)

    const {user} = useAuthContext()

    useEffect(() => {
        if(user){
            getWorkoutsData()
        }
    }, [user, getWorkoutsData])

    //delete
    const handleDeleteData = async (_id) => {
        await axios.delete(`https://workoutbuddy-backend-production.up.railway.app/api/workouts/deleteData/${_id}` ,  {
            headers:{
              "Authorization" : `Bearer ${user?.token}`
            }
          })
        getWorkoutsData()
    }

    //update data
    const handleUpdateData = async (item) => {
        setUpdateForm({
          _id: item._id,
          title: item.title,
          reps: item.reps,
          load: item.load
        })
      }
    return (
        <>  
        <div className='container'>
        <div className='record-container'>
            {
                workoutData && workoutData.map((item) => {
                    return (
                        
                        <div className='record' key={item._id}>
                            <h1>{item.title}</h1>
                            <p>Reps: {item.reps}</p>
                            <p>Load (in Kg): {item.load}</p>
                            <div className='btns'>
                            <button style={{backgroundColor:'#1aac83'}} onClick={() => {handleUpdateData(item)}}>Edit</button>{" "}
                            <button style={{backgroundColor:' #e7195a '}} onClick={() => { handleDeleteData(item._id) }}>Delete</button>
                            </div>
                        </div>
                       
                    )
                })
            }
             </div>
            </div>
        </>
    )
}

export default Records