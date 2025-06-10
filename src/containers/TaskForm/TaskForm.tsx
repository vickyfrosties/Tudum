import { useState, type ChangeEvent } from "react";
import style from "./TaskForm.module.scss";

const TaskForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: Date,
    notes: "",
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <h3>Add a new task</h3>
      <form
        onSubmit={handleSubmit}
        className={style["taskForm"]}
        name="taskForm"
      >
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Buy a new notebook"
        />

        <label htmlFor="date">Date: </label>
        <input type="date" name="date" id="date" />

        <label htmlFor="notes">Notes:</label>
        <textarea name="notes" id="notes" />

        <input
          className={style["formButton"]}
          type="submit"
          value="Add new task"
        />
      </form>
    </>
  );
};

export default TaskForm;
