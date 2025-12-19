import type { userDetails } from "@/types"
import { useSelector } from "react-redux"
import type { RootState } from '../store';
import UserWorkout from './subcomp/UserWorkout';
import UserProfile from "./subcomp/UserProfile";
import Diet from "./subcomp/Diet";
import { useEffect } from 'react';
import { baseAPI } from "@/API";
import { useDispatch } from "react-redux";
import { setUser } from "@/redSlices/userSlice";

const Home = () => {
  const dispatch = useDispatch()
  const user: userDetails = useSelector((state: RootState) => state.user)
  console.log(user)
  useEffect(() => {
    async function Init(){
      const req = await fetch( baseAPI + "/api/user/tokenCheck", {
        'method': 'POST',
        'headers': {
          'Content-Type': "application/json"
        }, 
        "body": JSON.stringify({
          'token': localStorage.getItem("userToken")
        })
      })
      const resp = await req.json()
      console.log(resp)
      dispatch(setUser(resp.user))
    }
    Init()
  }, [])
  return (
    <div className="w-screen flex flex-row items-center justify-center">
        <div className="w-full h-full flex flex-row py-4">
          <div className="flex-flex-col">
            <UserProfile />
          </div>
            <div className="flex flex-1 flex-col justify-center items-center">
              <div className="flex-1"><UserWorkout /></div>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center">
              <Diet />
            </div>
        </div>
    </div>
  )
}

export default Home