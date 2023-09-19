import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllByAltText } from "@testing-library/react";
import { addToDo, getAllToDo, updateToDo , deleteToDo } from "./utils/HandleApi";


function App() {
  const[toDo,setToDo] = useState([])
  const [text,setText] = useState("")
  const [isUpdating,setIsUpdating] = useState(false)
  const [toDoId,setToDoId] = useState("")
  const updateMode = (_id,text) =>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  useEffect(()=>{
    getAllToDo(setToDo)
  },[])
  return (
    <div className="App">
      <div className ="container">
        <h1>
          ToDo App
        </h1>
      <div className="top">
        <input 
        type="text" 
        placeholder="Add Todos..." 
        value={text}
        onChange={(e)=> setText(e.target.value)}
        
        >

        </input>
        <div 
        className="add" 
        onClick={isUpdating?
          ()=>updateToDo(toDoId,text,setToDo,setText,setIsUpdating) 
          : () => addToDo(text,setText,setToDo)}>
          {isUpdating? "Update" : "Add"}
        </div>
      </div>
      <div className="list">
        {toDo.map((item)=> <ToDo 
        key={item._id} 
        text={item.text} 
        updateMode={() => updateMode(item._id,item.text)}
        deleteToDo={() => deleteToDo(item._id,setToDo)}
        
        />)}


      </div>
      </div>
    </div>
  );
}

export default App;
