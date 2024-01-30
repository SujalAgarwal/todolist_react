/* eslint-disable react/prop-types */
import { useState } from "react";

function AddTodo({addtask}) {
 const [item,set_item]=useState("");
 const [date,set_date]=useState("");

  const handletext=(event)=>{
       set_item(event.target.value);
  }
  const handledate=(event)=>{
    set_date(event.target.value);
  }
  const handle_add_btn=()=>{
    addtask(item,date);
    set_item("");
    set_date("");
  }
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" onChange={handletext} value={item}/>
        </div>
        <div className="col-4">
          <input type="date" onChange={handledate} value={date}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handle_add_btn}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
