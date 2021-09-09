import React, { useState } from "react";
import List from "./List";

const App=()=>{

const [inputList,setInputlist]= useState("");
const [items,setItems]=useState([]);

const itemEvents=(event)=>{
    setInputlist(event.target.value);
};

const listOfItems=()=>{
     setItems((olditems)=>{
         return[...olditems, inputList]
     });
     setInputlist("");
}

const deleteItems=(id)=>{
    setItems((olditems)=>{
        return olditems.filter((arrEle,index)=>{
              return index!==id;
        })
    })
}

    return(
        <>
        <div className="main_div">
        <div className="center_div">
        <br />
            <h1>ToDo List</h1>
         <br />
        <input type="text" placeholder="Add Items" onChange={itemEvents}  value={inputList} />
        <button onClick={listOfItems}>+</button>
        <ol>
            {/* <li>{inputList}</li> */}
           { items.map( (itemsval, index)=>{
              return  <List text={itemsval}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
              />
            } )}
        </ol>
        </div>

        </div>
        </>
    );
}
export default App;