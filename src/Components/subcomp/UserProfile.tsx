import type { userDetails } from "@/types"
import { useSelector } from "react-redux"
import type { RootState } from '../../store';
const UserProfile = () => {
    
  const user: userDetails = useSelector((state: RootState) => state.user)
  console.log("redux - " + JSON.stringify(user))
  return (
    <div className="flex flex-col">
        <div className="text-2xl font-semibold">
            {user.username}
        </div>
        <div className="text-lg font-semibold">
            Age - {user.age == "0" ? "Not Set" : user.age}
        </div>
        <div className="text-lg font-semibold flex flex-col">
            <span>Height - {user.height == "0" ? "Not Set" : user.height + "cm"}</span>
            <span>Weight - {user.weight == "0" ? "Not Set" : user.weight + "kg"}</span>
        </div>
        <div className="text-lg font-semibold">
            Training level - {user.level == "" ? "Not Set" : user.level}
        </div>
        <div className="text-lg font-semibold">
            Experience - {(user.expYears == "-1" ? "Not Set" : user.expYears + " Years") + (user.expMonths == "-1" ? "" : " and " + (user.expMonths + " Months"))}
        </div>
        <div className="text-lg font-semibold">
            Location - {user.location == "" ? "Not Set" : user.location}
        </div>
        <div className="text-lg font-semibold">
            Primary Concern - {user.primaryConcern == "" ? "Not Set" : user.primaryConcern}
        </div>
        <div className="text-lg font-semibold">
            Specific Ailment - {user.specificAilment == "" ? "None" : user.specificAilment}
        </div>
    </div>
  )
}

export default UserProfile