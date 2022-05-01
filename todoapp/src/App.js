import { useState } from "react";
import AddBtn from "./components/AddBtn/AddBtn";
import Doing from "./components/Doing/Doing";
import Done from "./components/Done/Done";
import ModalPage from "./components/Modal/Modal";
import PageTitle from "./components/PageTitle/PageTitle";
import Todo from "./components/Todo/Todo";

function App() {
  const [show, setShow] = useState(false);
  let [task, setTask] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (e, item = null) => {
    if (item) {
      setTask(item);
    } else {
      setTask(null);
    }
    setShow(true);
  };
  return (
    <div style={{ padding: "0 50px" }} className="p-6">
      <PageTitle />
      <AddBtn handleShow={handleShow} />
      <ModalPage
        task={task}
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Todo task={task} handleShow={handleShow} />
        <Doing handleShow={handleShow} />
        <Done handleShow={handleShow} />
      </div>
    </div>
  );
}

export default App;
