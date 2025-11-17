import type { Workout } from "@/types";
import { garbWorkout } from "./garbageVals";
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction} from '@reduxjs/toolkit';


const initialState: Workout[] = garbWorkout

const workoutSlice = createSlice({
    name: "workout",
    initialState,
    reducers:{
        setWorkout: (_state, action: PayloadAction<Workout[]>) => {
            return action.payload
        },
        clearWorkout: () => initialState
    }
})

export const {setWorkout, clearWorkout} = workoutSlice.actions
export default workoutSlice.reducer 