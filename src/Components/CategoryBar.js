import { useState } from "react";
import "../Styles/CategoryBar.css";

function CategoryBar(props) {
  const [status, setStatus] = useState(0);
  return (
    <div className="Form">
        <button
          className={(status === 0) ? "highlighted" : ""}
          onClick={() => {
            props.filterActive(0);
            setStatus(0);
          }}
        >
          All tasks
        </button>
        <button
          className={(status === 1) ? "highlighted" : ""}
          onClick={() => {
            props.filterActive(1);
            setStatus(1);
          }}
        >
          Active tasks
        </button>
        <button
          className={(status === 2) ? "highlighted" : ""}
          onClick={() => {
            props.filterActive(2);
            setStatus(2);
          }}
        >
          Done tasks
        </button>
    </div>
  );
}

export default CategoryBar;
