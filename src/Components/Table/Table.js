import { useState } from "react";
import { ComparatorByState } from "./ComparatorByState";
import States from "./States.json";

import "../../Styles/Table.css";
import arrow_down from "../../Assets/Images/arrow_down.png";
import arrow_up from "../../Assets/Images/arrow_up.png";
import empty from "../../Assets/Images/Empty.png";

function Table(props) {
  let arr = props.arr;
  const [sortType, setSortType] = useState(States.TaskAsc);
  const [changeRowIndex, setChangeRowIndex] = useState(-1);
  const [rowData, setRowData] = useState({});
  arr.sort(ComparatorByState[sortType]);
  return (
    <div className="Table">
      <table>
        <tbody>
          <tr>
            <th
              onClick={() => {
                setSortType(
                  sortType === States.TaskAsc ? States.TaskDec : States.TaskAsc
                );
                arr.sort(ComparatorByState[sortType]);
              }}
            >
              Tasks
              <img
                className="sortIndicator"
                src={
                  sortType === States.TaskAsc
                    ? arrow_down
                    : sortType === States.TaskDec
                    ? arrow_up
                    : empty
                }
                alt=""
              />
            </th>
          </tr>
          {arr.map((el, index) => {
            if (index === changeRowIndex) {
              return (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      placeholder="Task"
                      value={rowData.task}
                      name="Task"
                      onChange={(e) =>
                        setRowData((previousData) => {
                          let newData = {
                            id: previousData.id
                          };
                          newData.task = e.target.value;
                          return newData;
                        })
                      }
                    />
                  </td>
                  <td>
                    <div className="buttonPanelActive">
                      <button
                        className="buttonCancel"
                        onClick={() => {
                          setChangeRowIndex(-1);
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="buttonSave"
                        onClick={() => {
                          props.changeParticipant(rowData);
                          setChangeRowIndex(-1);
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={index}>
                  <td>{el.task}</td>
                  <td>
                    <div className="buttonPanelDefault">
                      <button
                        className="buttonEdit"
                        onClick={() => {
                          setChangeRowIndex(index);
                          setRowData(() => {
                            let newData = arr[index];
                            return newData;
                          });
                        }}
                      ></button>
                      <button
                        className="buttonDelete"
                        onClick={() => props.deleteParticipant(el.id)}
                      ></button>
                    </div>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
