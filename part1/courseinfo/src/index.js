import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => <h1>{course}</h1>;

const Parts = ({ partes, exercises }) => (
  <p>
    {partes}:{exercises}
  </p>
);
const Content = ({
  parte1,
  parte2,
  parte3,
  ejercicio1,
  ejercicio2,
  ejercicio3,
}) => {
  return (
    <div>
      <Parts partes={parte1} exercises={ejercicio1} />
      <Parts partes={parte2} exercises={ejercicio2} />
      <Parts partes={parte3} exercises={ejercicio3} />
    </div>
  );
};
const Total = ({ ejercicio1, ejercicio2, ejercicio3 }) => {
  return <p>Number of exercises: {ejercicio1 + ejercicio2 + ejercicio3}</p>;
};
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  return (
    <div>
      <Header course={course} />
      <Content
        parte1={part1}
        parte2={part2}
        parte3={part3}
        ejercicio1={exercises1}
        ejercicio2={exercises2}
        ejercicio3={exercises3}
      />
      <Total
        ejercicio1={exercises1}
        ejercicio2={exercises2}
        ejercicio3={exercises3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
