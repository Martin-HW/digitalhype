import React, { useState } from "react";
import styles from "./my-style.module.css";

const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const handleCreate = () => {
    let one = item.split("0").filter((val, ind, arr) => {
      return val !== "";
    });
    const [first, last, id] = one;
    one = `{"first_name":"${first}","last_name":"${last}","id":"${id}"}`;
    setItem(one);
    setList(list.concat(one));
    setItem("");
  };

  const handleDelete = (index) => {
    setList(
      list.filter((val, ind, arr) => {
        return ind !== index;
      })
    );
  };
  return (
    <div>
      <h1>ENTER YOUR DATA</h1>
      <input
        type="text"
        value={item}
        placeholder="Enter your info"
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        className={styles.add}
        onClick={() => {
          if (item === "" || item === " ") {
            alert("Enter some info...PLEASE!!!!!!!!!");
          } else {
            handleCreate();
          }
        }}
      >
        Create info
      </button>

      <ul>
        {list.map((val, ind, arr) => {
          return (
            <li key={ind}>
              {val} {"  "}{" "}
              <button
                className={styles.delete}
                onClick={() => {
                  handleDelete(ind);
                }}
              >
                delete
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
// Robert000Smith000123
export default App;
