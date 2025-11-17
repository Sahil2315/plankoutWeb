import type { userDetails } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { garbUser } from "./garbageVals";

const initialState : userDetails = garbUser 

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (_state, action: PayloadAction) => {
            return action.payload
        },
        clearUser: () => initialState
    }
})

export const {setUser, clearUser} = userSlice.actions
export default userSlice.reducer