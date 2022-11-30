import React from 'react'
import { useDispatch } from 'react-redux'
import { cheker, deleteAction } from '../features/todoSlice'
const Incomplete = (props) => {
  const dispatch =useDispatch()
    return (
    <>
       {
                  props.arr.map((data, i) =>{ 
                    if(data.status=="Complete")
                    return ''
                    return <li> <input index={i} type="checkbox" name="incompleted" onClick={()=>dispatch(cheker({status:"Complete",index:i}))} unchecked /><label>{data.text}</label><input type="text" id="name" className="name" value={data.text} /><button className="edit" index={i} name="incompleted" onClick={()=>props.editClick(i)}>Edit</button><button onClick={()=>dispatch(deleteAction(i))}  name="incompleted" className="delete">Delete</button> </li>})
                }</>
  )
}

export default Incomplete