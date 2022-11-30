import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAction, updateAction, editMode } from '../features/todoSlice'
import Complete from './Complete'
import Incomplete from './Incomplete'

const MainFunc = () => {
    const inpuRef=useRef()
    const state=useSelector(state=>state.todoSlice)
    const dispatch=useDispatch()
const handleClick=()=>{
    
    if (state.index === -1) {
        if (inpuRef.current.value !== "")
            dispatch(addAction({text:inpuRef.current.value,status:"Incomplete"}))
    }
    else {
       dispatch(updateAction({text:inpuRef.current.value,index:state.index}))        
    }
    inpuRef.current.value=''
}

const editClick=(index)=>{
    inpuRef.current.value=state.todos[index].text
    dispatch(editMode(index))
    
    }
console.log("state",state)
  return (
    <>
    <div className="container">
                    <h2>TODO LIST</h2>
                    <h3>Add Item</h3>
                    <p>
                        <input id="new-task" type="text" value={state.Message} ref={inpuRef} />
                        <button id="actioner" name={state.eStatus} index={state.index} onClick={handleClick}>{state.btnVal}</button>
                    </p>

                    <h3>Todo</h3>
                    <h3>Incomplete</h3>
                    <ul id="Incomplete">

                        <Incomplete arr={state.todos} editClick={editClick} />
                    </ul>
                    <h3>Complete</h3>
                    <ul id="Complete">

                        <Complete arr={state.todos} editClick={editClick} />
                    </ul>


                </div>
    </>
  )
}

export default MainFunc