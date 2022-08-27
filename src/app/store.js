import {configureStore} from "@reduxjs/toolkit"
import realstateReducer from '../features/userSlice'

export const store = configureStore({

    reducer:{
         realstateData :realstateReducer
    }
})