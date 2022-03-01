import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../Redux/actions/todoActions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const user = props.userId;
  const todos = useSelector((state) => state.todoReducers.todos);
  const [checked, setChecked] = useState(false);
  const handleDelete = (e) => {
    dispatch(removeTodo(e.target.name));
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked);
    console.log(!checked);
    console.log(user);
    dispatch(toggleTodo(e.target.value));
  };

  const eachUserTodos = () => {
    let todos = JSON.parse(localStorage.getItem("todos" ? "todos" : []));
    todos.forEach((todo) => {
      return todo.userId === user;
    });
  };
  eachUserTodos();

  useEffect(() => {
    localStorage.getItem("todos");
  }, []);

  return (
    todos !== "" &&
    todos.map(
      (item) =>
        item.userId === user &&
        item !== "" && (
          <ListGroup.Item key={item.id}>
            <Container>
              <Row border="secondary">
                <Col sm={1}>
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      value={item.id}
                      onChange={handleCheck}
                    ></Form.Check>
                  </Form.Group>
                </Col>
                <Col sm={8}>
                  {item.completed ? (
                    <Form.Text as="del">{item.todo}</Form.Text>
                  ) : (
                    <Form.Text style={{ fontSize: "16px" }}>
                      {item.todo}
                    </Form.Text>
                  )}
                </Col>
                <Col sm={3}>
                  <Button
                    name={item.id}
                    size="sm"
                    variant="danger"
                    onClick={handleDelete}
                  >
                    DEL
                  </Button>
                </Col>
              </Row>
            </Container>
          </ListGroup.Item>
        )
    )
  );
};

export default TodoItem;
