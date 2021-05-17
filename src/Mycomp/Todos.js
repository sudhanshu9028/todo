import React from "react";
import { Todoitem } from "./Todoitem";

export const Todos = (props) => {
  let todoStyle = {
    marginright: "150px",
    marginleft: "250px",
    width: "1024px",
    minHeight: "45vh",
    margin: "15px auto",
  };
  const quote = {
    marginTop: "40vh",
  };
  return (
    <div className="container" style={todoStyle}>
      <h3 className="my-3">Your Todos</h3>
      {props.todos.length === 0
        ? "No todos"
        : props.todos.map((todo) => {
            return (
              <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
      <div style={quote}>
        <figure className="text-center">
          <blockquote className="blockquote">
            <p>
              ”If you win, you live. If you lose, you die. If you don’t fight,
              you can’t win! FIGHT! FIGHT!!!”
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite title="Source Title">Eren Yeager</cite>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
