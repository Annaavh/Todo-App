import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../features/todos/todoSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function ModalPage({ show, handleClose, task }) {

  const notify = () => toast.error("Please fill all the required fields !",{position: toast.POSITION.TOP_CENTER});
  const success = () => toast.success("Success ! The task was added.",{position: toast.POSITION.TOP_CENTER});
  const updated = () => toast.success("Success ! The task was updated.",{position: toast.POSITION.TOP_CENTER});

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title && status && description && priority) {
      if (task) {
        dispatch(
          updateTodo({ title, description, status, priority, id: task.id })
        );
        updated()
     
      } else {
        dispatch(
          addTodo({ title, description, status, priority, id: Date.now() })
        );
        success()
      }
    } else {
      handleClose();
      notify()
      // <ToastContainer />
      // alert("Please fill all the required fields !");
    }

    setTitle("");
    setStatus("");
    setDescription("");
    setPriority("");
    handleClose();
  };

  useEffect(() => {
    if (task) {
      setTitle(task?.title);
      setDescription(task?.description);
      setStatus(task?.status);
      setPriority(task?.priority);
    } else {
      setTitle("");
      setStatus("");
      setDescription("");
      setPriority("");
    }
  }, [task]);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{task ? "Edit " : "Add "}Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group>
              <Form.Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="mb-3"
              >
                <option value="">Status</option>
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </Form.Select>
            </Form.Group>
            <Form.Select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="mb-3"
            >
              <option value="">Priority</option>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {task ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalPage;
