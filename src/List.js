import React from "react";
import { v4 as uuid4 } from 'uuid';

function List(props){
    const list = props.list;
    const updateValue = props.counterUpdate;

   return (<div>
       {list.map(element =><div key={element.id}>
           {element.buttonsArray.sort((a, b)=> b - a).map(el =>
           <button key={uuid4()} onClick={()=> updateValue(element.id, -el)}>{-el}</button>)}
           {element.value}
           {element.buttonsArray.sort((a, b)=> a - b).map(el =>
               <button key={uuid4()} onClick={()=> updateValue(element.id, el)}>{el}</button>)}
           <button onClick={()=> props.deleteRow(element.id)}>delete row</button>
           <hr/>
       </div>)}
   </div>)
}
export default List;

