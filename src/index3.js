import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./styles.css";

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
