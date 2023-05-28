import { useState } from "react";
import "../Styles/Form.css";

function Form(props) {
  const [task, setTask] = useState("");
  return (
    <div className="Form">
      <input
        type="text"
        placeholder="Task"
        value={task}
        name="Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <div className="butAddDiv">
        <button
          className="addNewButton"
          onClick={() => {
            props.addParticipant({task: task, active: true});
            setTask('');
          }}
        >
          Add task
        </button>
      </div>
    </div>
  );
}

export default Form;
