import React from 'react'
import { useDispatch } from 'react-redux'
import { cheker, deleteAction } from '../features/todoSlice'
const Complete = (props) => {
  const dispatch =useDispatch()
    return (
    <>
       {
                  props.arr.map((data, i) =>{ 
                    if(data.status=="Incomplete")
                    return ''
                    else
                    return  <li> <input type="checkbox" name="completed" onClick={()=>dispatch(cheker({status:"Incomplete",index:i}))} checked /><label>{data.text}</label><input type="text" id="name" className="name" value={data.text} /><button className="edit" name="completed" onClick={()=>props.editClick(i)}>Edit</button><button  onClick={()=>dispatch(deleteAction(i))} index={i} name="completed" className="delete">Delete</button> </li>})
                }
            </>
        );
    }


export default Complete;
<>
</>