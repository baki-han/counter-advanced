import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [list, setList] = useState([]);

  //Todo add new counter row
  const addButton = (valueItem) =>{
    const newButtons = [];
    for(let i = 1; i <= Number(valueItem); i++){
      newButtons.push(i);
    }

    const obj = {
      value: Number(valueItem),
      id: uuidv4(),
      buttonsArray: newButtons,
    };
    const newArray = [...list, obj];
    setList(newArray);
  }

  // Todo update counter
  const counterUpdate =(id, value) =>{
     const newList = list.map(el=>{
         if(el.id === id){return {...el, value: el.value + value};}
         else{return el;}
     })
     setList(newList);
  }

  // Todo delete row
    const deleteRow = (id) =>{
      setList(list.filter(el => el.id !== id));
    }

  return (
      <div className="App">
        <Header addButton={addButton} />
        <hr/>
        <List list={list}
              counterUpdate={counterUpdate}
              deleteRow={deleteRow}
        />
      </div>
  );
}

export default App;