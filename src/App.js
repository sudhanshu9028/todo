import "./App.css";
import Header from "./Mycomp/header";
import { Todos } from "./Mycomp/Todos";
import { AddTodo } from "./Mycomp/AddTodo";
import { Footer } from "./Mycomp/Footer";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    //console.log("Deleting", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    let sno;
    //console.log("added", title, desc);
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    //console.log(newTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
