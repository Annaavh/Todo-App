import React from "react";
import { Badge, Card, CloseButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../features/todos/todoSlice";

function Done({ handleShow }) {
  const dispatch = useDispatch();
  const todos = useSelector((state) =>
    state.todos.todo?.Tasks.filter((item) => item.status === "Done")
  );
  const handleBg = (item) => {
    if (item.priority === "High") {
      return "danger";
    } else if (item.priority === "Low") {
      return "warning";
    } else {
      return "success";
    }
  };
  const a = [];
  const b = [];
  let todo = [];
  todos?.map((item) => {
    if (item.priority === "High") {
      a.push(item);
    } else if (item.priority === "Normal") {
      b.unshift(item);
    } else {
      b.push(item);
    }
    return (todo = a.concat(b));
  });
  function handleClick(e, item) {
    e.stopPropagation();
    dispatch(deleteTodo(item));
  }
  return (
    <div>
      <Card
        style={{
          width: "29rem",
          boxShadow: "5px 10px 18px #888888",
          maxHeight: "500px",
          overflow: "auto",
        }}
      >
        <Card.Header>
          <h3>Done</h3>
        </Card.Header>
        <Card.Body>
          {todo.map((item) => (
            <div
              onClick={(e) => handleShow(e, item)}
              key={Math.random()}
              className="cardContainer"
            >
              <Card.Title
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                {" "}
                {item.title}{" "}
                <CloseButton
                  style={{ fontSize: "14px" }}
                  onClick={(e) => handleClick(e, item)}
                  aria-label="Hide"
                />{" "}
              </Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <strong>Priority:</strong>{" "}
              <Badge bg={handleBg(item)}>{item.priority}</Badge>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Done;
