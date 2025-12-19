import type { userDetails } from "@/types"
import { useSelector } from "react-redux"
import type { RootState } from '../../store';
const UserProfile = () => {
    
  const user: userDetails = useSelector((state: RootState) => state.user)
  console.log(user)
  return (
    <div className="flex flex-col h-full border-r w-[350px] border-indigo-400/40 px-4 py-4">
        <div className="text-2xl font-semibold">
            {user.username}
        </div>
        <div className="text-lg mt-4 font-semibold">
            Age - {user.age == 0 ? "Not Set" : user.age}
        </div>
        <div className="text-lg mt-4 font-semibold flex flex-col">
            <span>Height - {user.height == 0 ? "Not Set" : user.height + " cm"}</span>
            <span>Weight - {user.weight == 0 ? "Not Set" : user.weight + " kg"}</span>
        </div>
        <div className="text-md mt-4 flex flex-col font-semibold">
            <span>Training level - { !user.level || user.level == "" ? "Not Set" : user.level}</span>
            <span className="mt-2">Experience - {(user.expYears && user.expYears == -1 ? "Not Set" : user.expYears + " Years") + (user.expMonths && user.expMonths == -1 ? "" : " and " + (user.expMonths + " Months"))}</span>
        </div>
        <div className="text-lg mt-4 font-semibold">
            Location - { !user.location || user.location == "" ? "Not Set" : user.location}
        </div>
        <div className="text-lg mt-4 font-semibold">
            Primary Concern - { !user.primaryConcern || user.primaryConcern == "" ? "Not Set" : user.primaryConcern}
        </div>
        <div className="text-lg mt-4 font-semibold">
            Specific Ailment - {user.specificAilment && user.specificAilment == "" ? "None" : user.specificAilment}
        </div>
    </div>
  )
}

export default UserProfile