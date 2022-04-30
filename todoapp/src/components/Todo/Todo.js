import React from "react";
import { Badge, Card } from "react-bootstrap";
import "../../stylesheet.css";
import { useSelector } from "react-redux";

function Todo({ handleShow }) {
  const todos = useSelector((state) =>
    state.todos.todo.Tasks.filter((item) => item.status === "Todo")
  );
  const a = [];
  const b = [];
  let todo = [];
  todos.map((item)=>{
    if(item.priority==="High"){
      a.push(item)
    }else if(item.priority==="Normal"){
      b.unshift(item)
    }else{
      b.push(item)
    }
    return todo = a.concat(b)
  })
  // console.log(todo,'priority arr')

  const handleBg = (item) => {
    if (item.priority === "High") {
      return "danger";
    } else if (item.priority === "Low") {
      return "warning";
    } else {
      return "success";
    }
  };
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
          <h3>To do</h3>
        </Card.Header>
        <Card.Body style={{ padding: "15px", backgroundColor: "#F7F7F7FF" }}>
          {todo.map((item) => (
            <div
              key={Math.random()}
              onClick={(e) => handleShow(e, item)}
              className="cardContainer"
            >
              <Card.Title> {item.title} </Card.Title>
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

export default Todo;
