import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./containers/TaskForm/TaskForm";

function App() {
  return (
    <>
      <NavBar />
      <TaskList />
      <TaskForm />
    </>
  );
}

export default App;
