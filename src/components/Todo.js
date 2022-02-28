import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../Redux/actions/todoActions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";
import Auth from "./Auth";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todoItem, setTodoItem] = useState("");
  const userId = Auth();

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducers.todos);

  const setTodo = (e) => {
    let item = e.target.value.trim();
    setTodoItem(item);
  };

  const addTodo = (e) => {
    e.preventDefault();
    todoItem &&
      todoItem !== "" &&
      dispatch(todoActions({ todo: todoItem, id: uuidv4(), userId: userId }));

    setTodoItem("");
  };

  let todosLs = JSON.stringify(todos);
  localStorage.setItem("todos", todosLs);
  //authAndTodoList=()

  useEffect(() => {
    const userTodos = JSON.parse(localStorage.getItem("todos" ? "todos" : []));
    console.log(userTodos);
    //reduxtan aldığın token ile local storagetakini karşılaştıracagız. online olan ile tutyorsa user idsi alacağız
    //local storagetaki todoları user id ye göre filtreleyip current liste set edeceğiz
  }, []);

  return (
    <div>
      <Form onSubmit={addTodo}>
        <Form.Group size="lg" controlId="todo">
          <Form.Label>TODO</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="todo"
            onChange={setTodo}
            value={todoItem}
            required
          />
        </Form.Group>
        <Button size="lg" type="submit" className="mt-3" disabled={!todoItem}>
          + ADD TODO
        </Button>
      </Form>
      <Card className="mt-4" size="lg striped">
        <ListGroup variant="flush">
          <TodoItem userId={userId} />
        </ListGroup>
      </Card>
    </div>
  );
};

export default Todo;
