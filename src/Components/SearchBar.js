import { useState } from "react";
import "../Styles/SearchBar.css";

function SearchBar(props) {
  const [newFilterName, setNewFilterName] = useState("");
  return (
    <div className="Form">
      <input
        type="text"
        placeholder="Search"
        value={newFilterName}
        name="FilterName"
        onChange={
          (e) => {
            setNewFilterName(e.target.value);
            props.filterParticipant(e.target.value + "");
            console.log("setNewFIlterName " + e.target.value);
          }
        }/>
    </div>
  );
}

export default SearchBar;