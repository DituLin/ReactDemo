import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submitingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    submitingStatus.current = true
    add(function (prevData) {
      return [
        ...prevData,
        {
          id: v4(),
          note,
          date,
          time,
        },
      ];
    });
  }

  return (
    <div className="address">
      <h1>Title</h1>
      <p> 记事</p>
      <input type="text" onChange={noteChange} />
      <p> Date</p>
      <input type="date" onChange={dateChange} />
      <p> Time</p>
      <input type="time" onChange={timeChange} />
      <button onClick={addItem} className="add">
        Add
      </button>
    </div>
  );
};

export default Edit;
