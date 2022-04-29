import React from 'react'
import { Button } from 'react-bootstrap';
import "../../stylesheet.css";

function AddBtn({handleShow}) {
  return (
    <div>
         <Button variant="dark" onClick={handleShow}>
        Add Task
      </Button>
    </div>
  )
}

export default AddBtn