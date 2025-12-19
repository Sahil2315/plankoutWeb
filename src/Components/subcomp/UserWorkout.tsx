import { baseAPI } from "@/API"
import type { userDetails, Workout } from "@/types"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import type { RootState } from '../../store';
import WorkoutList from "./WorkoutList";
import { Loader, Tv } from "lucide-react";
import Tracker from "./Tracker";

const UserWorkout = () => {
  const today = new Date()
  let user: userDetails = useSelector((state: RootState) => state.user)
  let [tVisible, tToggle] = useState(false)
  let workStatus = (localStorage.getItem('workoutFinished') == "true" && localStorage.getItem("workoutDay") == today.getDay().toString())
  let [workoutFinished, toggleFinished] = useState(workStatus)
  let [data, setData] = useState<Workout[]>([])
  useEffect(() => {
    async function Init(){
      if (user.userid && user.userid != ""){
        let request = await fetch( baseAPI + `/api/workout/getWorkout/${user.userid}`, {
          'method': 'GET', 
          'headers': {
            'Content-Type': 'application/json'
          },
        })
        let response = await request.json()
        if(response.success){
          setData(response.workout.plan)
          console.log(response.workout.plan)
        }
      }
    }
    Init()  
  }, [user])
  useEffect(() => {
    if (workoutFinished){
      localStorage.setItem('workoutFinished', "true")
      localStorage.setItem('workoutDay', today.getDay().toString())
    }
  }, [workoutFinished])
  if ( !data || data.length == 0 ){
    return <Loader></Loader>
  }
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <span className="text-3xl font-semibold">Today's Workout</span>
      <WorkoutList finished={workoutFinished} tVisible = {tVisible} tToggle={tToggle} data = {data[today.getDay()].workout} />
      <Tracker tVisible = {tVisible} tToggle={tToggle} workout = {data[today.getDay()].workout} finished={workoutFinished} toggleFinished={toggleFinished} />
    </div>
  )
}

export default UserWorkout