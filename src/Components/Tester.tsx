import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { baseAPI } from "@/API"
import type { Workout } from "@/types"
import { Overlay } from "./subcomp/Overlay"
import { toast } from "sonner"

const Tester = () => {
    const [gender, setGender] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [trainingLevel, setLevel] = useState<string>("")
    const [trainingDays, setDays] = useState<string>("")
    const [yearsOfTraining, setYears] = useState<string>("")
    const [monthsOfTraining, setMonths] = useState<string>("")
    const [weight, setWeight] = useState<string>("")
    const [height, setHeight] = useState<string>("")
    const [age, setAge] = useState<string>("")
    const [ailment, setAilment] = useState<string>("")
    const [purposes, setPurposes] = useState<string[]>([])
    const [details, setDetails] = useState<Workout []>([])
    const [ovVisible, toggleOV] = useState<boolean>(false)
    const selectContClass = "bg-slate-700/60 text-white backdrop-blur-sm rounded-lg cursor-pointer max-md:text-sm"
    async function submitter(){
        if(gender && location && trainingLevel && trainingDays && yearsOfTraining && monthsOfTraining && weight && height && age && purposes){
            toggleOV(true)
            let req;
            let primarConcern = ""
            for(let i=0; i< purposes.length - 1; i++){
                primarConcern += purposes[i] + " + "
            }
            primarConcern += purposes[purposes.length - 1]
            if (ailment == ""){
                setAilment("None")
            }
            req = await fetch(baseAPI + "/generateWorkout", {
                'method': "POST",
                'headers': {
                    'Content-Type': "application/json"
                },
                'body': JSON.stringify({
                    'gender': gender,
                    'location': location,
                    'level': trainingLevel,
                    'daysOfWorkout': trainingDays,
                    'expInYears':yearsOfTraining,
                    'expInMonths':monthsOfTraining,
                    'weight': weight,
                    'height':height,
                    'age': age,
                    'specificAilment': ailment,
                    'primaryConcern':primarConcern,
                })
            })
            let resp = await req.json()
            console.log(resp)
            setDetails(resp)
        }
        else{
            toast("Fields can't be left Empty!")
        }
    }
  return (
    <div className="flex flex-col max-md:mb-4 justify-center my-16 max-md:text-sm">
        <span className="text-xl">
            Create a Test Workout Plan here -
        </span>
        <div className="flex flex-row mt-8">
            <Select value={gender} onValueChange={(newVal) => setGender(newVal)}>
                <SelectTrigger className="w-[200px] cursor-pointer">
                    <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent className={selectContClass} >
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Others">Others</SelectItem>
                </SelectContent>
            </Select>
            <Select value={location} onValueChange={(newVal) => setLocation(newVal)}>
                <SelectTrigger className="w-[200px] ml-4 cursor-pointer">
                    <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent className={selectContClass} >
                    <SelectItem value="Male">Gym</SelectItem>
                    <SelectItem value="Female">Home</SelectItem>
                </SelectContent>
            </Select>
            <Select value={trainingLevel} onValueChange={(newVal) => setLevel(newVal)}>
                <SelectTrigger className="w-[200px] ml-4 cursor-pointer">
                    <SelectValue placeholder="Training Level" />
                </SelectTrigger>
                <SelectContent className={selectContClass} >
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="flex flex-col mt-2">
            <span className="text-xs mt-4 text-indigo-400">3 - 5 Training Days are Recommended</span>
            <Select value={trainingDays} onValueChange={(newVal) => setDays(newVal)}>
                <SelectTrigger className="w-[200px] mt-2 cursor-pointer">
                    <SelectValue placeholder="Training Days" />
                </SelectTrigger>
                <SelectContent className={selectContClass} >
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                </SelectContent>
            </Select>
            <span className="mt-4">Training Experience</span>
            <div className="flex flex-row">
                <Select value={yearsOfTraining} onValueChange={(newVal) => setYears(newVal)}>
                    <SelectTrigger className="w-[200px] mt-2 cursor-pointer">
                        <SelectValue placeholder="Years of Training" />
                    </SelectTrigger>
                    <SelectContent className={selectContClass} >
                        <SelectItem value="0">0 Year</SelectItem>
                        <SelectItem value="1">1 Year</SelectItem>
                        <SelectItem value="2">2 Years</SelectItem>
                        <SelectItem value="3">3 Years</SelectItem>
                        <SelectItem value="4">4 Years</SelectItem>
                        <SelectItem value="5">5 Years</SelectItem>
                        <SelectItem value="6">6 Years</SelectItem>
                        <SelectItem value="7">7 Years</SelectItem>
                        <SelectItem value="8">8 Years</SelectItem>
                        <SelectItem value="9">8 + Years</SelectItem>
                    </SelectContent>
                </Select>
                <Select value={monthsOfTraining} onValueChange={(newVal) => setMonths(newVal)}>
                    <SelectTrigger className="w-[200px] mt-2 ml-4 cursor-pointer">
                        <SelectValue placeholder="Additional Months" />
                    </SelectTrigger>
                    <SelectContent className={selectContClass} >
                        <SelectItem value="0">0 Month</SelectItem>
                        <SelectItem value="1">1 Month</SelectItem>
                        <SelectItem value="2">2 Months</SelectItem>
                        <SelectItem value="3">3 Months</SelectItem>
                        <SelectItem value="4">4 Months</SelectItem>
                        <SelectItem value="5">5 Months</SelectItem>
                        <SelectItem value="6">6 Months</SelectItem>
                        <SelectItem value="7">7 Months</SelectItem>
                        <SelectItem value="8">8 Months</SelectItem>
                        <SelectItem value="9">9 Months</SelectItem>
                        <SelectItem value="10">10 Months</SelectItem>
                        <SelectItem value="11">11 Months</SelectItem>
                        <SelectItem value="12">12 Months</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
        <span className="mt-4">Personal Data</span>
        <div className="flex flex-row">
            <div className="flex flex-col w-[200px]">
                <span className="text-xs mt-2">Weight:</span>
                <input type="text" className="w-full py-1 px-2 mt-1 rounded-xl text-md border-1 border-indigo-400/30" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight (in kg)" />
            </div>
            <div className="flex flex-col ml-4 w-[200px]">
                <span className="text-xs mt-2">Height:</span>
                <input type="text" className="w-full py-1 px-2 mt-1 rounded-xl text-md border-1 border-indigo-400/30" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height (in cm)" />
            </div>
            <div className="flex flex-col ml-4 w-[200px]">
                <span className="text-xs mt-2">Age:</span>
                <input type="text" className="w-full py-1 px-2 mt-1 rounded-xl text-md border-1 border-indigo-400/30" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
            </div>
        </div>
        <span className="mt-4">Purpose(s):</span>
        <ToggleGroup type="multiple" value={purposes} onValueChange={(value) => setPurposes(value)} className="flex flex-row mt-2 text-[17px] cursor-pointer">
            <ToggleGroupItem className="w-[200px] rounded-lg bg-slate-700/50 py-1 hover:bg-indigo-500/50 text-white cursor-pointer data-[state=on]:text-white data-[state=on]:bg-indigo-500/70" value="a">General Fitness</ToggleGroupItem>
            <ToggleGroupItem className="w-[200px] rounded-lg bg-slate-700/50 ml-4 py-1 hover:bg-indigo-500/50 text-white cursor-pointer data-[state=on]:text-white data-[state=on]:bg-indigo-500/70" value="b">Muscle Gain</ToggleGroupItem>
            <ToggleGroupItem className="w-[200px] rounded-lg bg-slate-700/50 ml-4 py-1 hover:bg-indigo-500/50 text-white cursor-pointer data-[state=on]:text-white data-[state=on]:bg-indigo-500/70" value="c">Weight Loss</ToggleGroupItem>
        </ToggleGroup>
        <input type="text" value={ailment} onChange={(e) => setAilment(e.target.value)} className="w-full py-1 px-2 mt-8 rounded-xl border-1 border-indigo-400/30" placeholder="Specific Ailment (Optional)" />
        <button onClick={submitter} className="text-white w-max mt-8 bg-indigo-700/60 px-2 py-1 rounded-lg hover:bg-indigo-700/90">
            Get Workout Plan
        </button>
        <Overlay visible={ovVisible} toggle={toggleOV} data={details} />
    </div> 
  )
}

export default Tester