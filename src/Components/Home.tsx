import type { userDetails } from "@/types"
import { useSelector } from "react-redux"
import type { RootState } from '../store';
import UserWorkout from './subcomp/UserWorkout';
import UserProfile from "./subcomp/UserProfile";
import Diet from "./subcomp/Diet";
import { useEffect } from 'react';
import { baseAPI } from "@/API";

const Home = () => {
  const user: userDetails = useSelector((state: RootState) => state.user)
  console.log(user)
  useEffect(() => {
    async function Init(){
      const req = await fetch( baseAPI + "/generateDiet", {
        'method': 'GET',
        'headers': {
          'Content-Type': "application/json"
        }
      })
      const resp = await req.json()
      console.log(resp)
    }
    Init()
  }, [])
  return (
    <div className="w-screen flex flex-row items-center justify-center">
        <div className="w-[1200px] h-full flex flex-row py-4">
            <div className="flex flex-3 flex-col">
              <div className="flex-1"><UserWorkout /></div>
            </div>
            <div className="flex flex-1 flex-col">
                <div className="flex-1 flex-flex-col">
                  <UserProfile />
                </div>
                <div className="flex-1 flex flex-col">
                  <Diet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home