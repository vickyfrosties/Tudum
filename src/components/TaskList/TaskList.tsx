import AddBtn from "../../containers/AddBtn/AddBtn";
import style from "./TaskList.module.scss";

const TaskList = () => {
  return (
    <>
      <section className={style["headline"]}>
        <h2>Tasks</h2>

        <select
          className={style["headline_filter_select"]}
          name="test"
          id="test"
        >
          <option value="all">All tasks</option>
          <option value="active">Active</option>
          <option value="done">Done</option>
        </select>

        <AddBtn />
      </section>

      <section></section>
    </>
  );
};

export default TaskList;
