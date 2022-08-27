import { createSlice, nanoid } from "@reduxjs/toolkit";
import { DATAS } from "../Datas";

const initialState = {
    DATAS,
    favourateItem: []
};



export const userSlice = createSlice({

    name:'realState',
    initialState,
    reducers:{
         favourate:  {

            reducer(state,action){
                state.favourateItem.push(action.payload.item)
            },prepare(item){
                return{
                    payload:{
                        id:nanoid(),
                        item
                    }
                }
            }

        }
    }
})

export const {favourate} = userSlice.actions;

export default userSlice.reducer;