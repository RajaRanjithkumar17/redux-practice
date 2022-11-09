import React, { useContext, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
// import "./Task.css"
import { stateContext } from "../context/Contexts";

const Tasks = () => {
  const [searchParams]= useSearchParams();
  let id=searchParams.get('id');
  console.log(id,"uhu");

  const [tasktitle, setTitle] = useState(" ");
  const [taskdescription, setdescription] = useState(" ");
  // const [tasks, add_task] = useState([]);
  const { state, dispatch } = useContext(stateContext);
  console.log(state.tasks, "tasks");
  const navigate = useNavigate();

  const HandelSub = (submit) => {
    submit.preventDefault();

    const temp = {
      id:state.tasks.length+1,
      tasktitle,
      taskdescription,
      defaultValue: false,
    };

    console.log("title", tasktitle);
    console.log("description", taskdescription, temp);

    setTitle("");
    setdescription("");
    dispatch({ type: "addtask_", payload: [...state.tasks, temp] });
    // add_task([...tasks, temp]);

  
  };
  const handletask = (tsk) => {
    if (tsk.target.name === "newTask_") {
      setTitle(tsk.target.value);
    } else {
      setdescription(tsk.target.value);
    }
  };

  return (
    <div className="tasks">
      <div className="tasks_">
        <h3>Add new task</h3>

        {/* {state.tasks?.map((item,index)=>{
          return(
            <div>
          {item.tasktitle}
           {item.taskdescription}//////////////pend
          
            </div>
            )
          
        })} */}
        <form onSubmit={HandelSub}>

        
          <input
            onChange={handletask}
            type={"text"}
            id="addnew"
            name="newTask_"
            value={tasktitle}
            placeholder="titile"
          />
          <textarea
            onChange={handletask}
            rows={"5"}
            name="message"
            value={taskdescription}
          />{" "}
          <br />
          <input type={"submit"} id="addbtn" />
        </form>
      </div>
    </div>
  );
};

export default Tasks;
