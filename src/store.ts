import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./redSlices/userSlice"
import workoutReducer from "./redSlices/workoutSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        workout: workoutReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch