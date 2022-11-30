import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos: [],
    index: -1,
    btnVal: "ADD"
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addAction: (state, action) => {
            state.todos.push(action.payload)
            state.Sno=state.Sno+1
        },
        updateAction:(state,action)=>{
            state.todos[action.payload.index].text=action.payload.text
            state.index=-1
            state.btnVal="Add"
        },
        deleteAction:(state,action)=>{
            state.todos.splice(action.payload,1)
        },
        editMode:(state,action)=>{
            state.btnVal="Update"
            state.index=action.payload
        },
        cheker:(state,action)=>{
            state.todos[action.payload.index].status=action.payload.status
        }
    }
})
export default todoSlice.reducer; 
export const {addAction,updateAction,deleteAction,editMode,cheker } =todoSlice.actions