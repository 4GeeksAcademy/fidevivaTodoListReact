import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'


function ToDoList(){
    const [list,setList]=useState([]);
    const [showDel,setShowDel]=useState(1);

    function addTask(e){
        if(e.key==="Enter"){
            let task= e.target.value;
            let newList=list.concat(task);
            setList(newList);
            e.target.value=null;
        }
    }
    function deleteTask(index){
        
        const newList=list.filter((task)=>{
            return(task!=list[index])
        })
        setList(newList);
    }
    const mappingFunction=(task,index)=>{
        
        return(
            <li key={index} className="list-group-item d-flex justify-content-between p-0 rounded-0 align-middle" style={{height: "65px"}} 
            onMouseEnter={()=>setShowDel(index)} onMouseLeave={()=>setShowDel()}>
                <span className="col-11 fs-3 text-secondary  ps-3 pt-2" style={{fontWeight: "200"}}>
                    {task}
                    
                </span>
                {showDel===index?<FontAwesomeIcon className="col-1 pt-4 text-danger" icon={faX}  onClick={()=>deleteTask(index)} size="lg"/>:"" }
            </li>
        )
        
    }
    const listInHtml = list.map(mappingFunction);
    return(
        <div className="container ">
            <header className="row justify-content-center"> 
                <h1 className="col-4  display-1 text-center text-secondary" style={{fontWeight: "100"}}> Todos</h1>
            </header>
            <ul className="row list-group shadow p-0 ">
                <input className="col-12 list-group-item rounded-0 "  onKeyDown={addTask} placeholder="What needs to be done?" style={{height:"70px"}}></input>
                {listInHtml}
                <li className="col-12 list-group-item text-secondary fs-5 rounded-0 ps-4" style={{height:"50px",fontWeight:"100"}}>{list.length} item left</li>
            </ul>
            <footer className="row list-group shadow  m-0 ">
                <span className="col-12 list-group-item rounded-0 "></span>
            </footer> 
            
        </div>
    )

 

}

export default ToDoList;