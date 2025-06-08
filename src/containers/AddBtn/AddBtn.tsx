import style from "./AddBtn.module.scss";

const AddBtn = () => {
  return (
    <>
      <button className={style["btn-add"]}>New task</button>
    </>
  );
};

export default AddBtn;
