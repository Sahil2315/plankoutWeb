import type { Exercise } from "@/types"

const WorkoutList = ({tVisible, tToggle, data, finished}: {tVisible: boolean, tToggle: (tog: boolean) => void, data: Exercise[], finished: boolean}) => {
  const dayMap = new Map()
  dayMap.set(0, "Sunday")
  dayMap.set(1, "Monday")
  dayMap.set(2, "Tuesday")
  dayMap.set(3, "Wednesday")
  dayMap.set(4, "Thursday")
  dayMap.set(5, "Friday")
  dayMap.set(6, "Saturday")
  
  const today = new Date()
  return (
    <div className={tVisible ? 'hidden' : `flex flex-row`}>
      <div className="flex flex-col" >
        <span className="text-[16px] font-semibold">{dayMap.get(today.getDay())}</span>
        { data.length > 0 ? 
          data.map((ex, ind) => {
            return(
              <div className="text-[11px] flex flex-col mt-2" key={ind}>
                <span className="text-[14px] font-semibold">{ex.exName}</span>
                <span className="mt-1">{ex.exSets} Sets - {ex.exReps} Reps (Or to Failure)</span>
                <span>{ex.exWeight} (Or what you already lift)</span>
              </div>
            )
          }) :
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold">Rest Day</span>
            <span className="text-[12px]">Enjoy the Well Deserved Rest.</span>
          </div>
        }
      </div>
      <div className={data.length > 0 ? "flex items-center justify-center ml-18" : "hidden"}>
        <button onClick={() => tToggle(true)} className={finished ? 'hidden': `w-[120px] h-[120px] rounded-full text-xl font-semibold bg-indigo-700/55 border-2 hover:bg-indigo-700/80`}>
          START
        </button>
        <div className={finished ? `flex flex-col items-center` : 'hidden'}>
          <span className="text-xl">Workout Finished!</span>  
          <span className="text-lg mt-2">Relax Now.</span>
        </div>           
      </div>
    </div> 
  )
}

export default WorkoutList