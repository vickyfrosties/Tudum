import style from "./AddBtn.module.scss";

const AddBtn = () => {
  const handleClick = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <button onClick={handleClick} className={style["btn-add"]}>
        New task
      </button>
    </>
  );
};

export default AddBtn;
