# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJS is one of the most popular libraries, courtesy of Facebook, for building web applications. It solves many of the problems that arise with intense user interfaces, such as ever-changing data and multiple users interacting. It allows for reusable components to get and alter the data of the state and then React takes care of adjusting re-rendering the DOM when needed.

1. What does it mean to think in react?

ReactJS is one of the most popular libraries, courtesy of Facebook, for building web applications. It solves many of the problems that arise with intense user interfaces, such as ever-changing data and multiple users interacting. It allows for reusable components to get and alter the data of the state and then React takes care of adjusting re-rendering the DOM when needed.

1. Describe state.

The state belongs to the component in which it is declared, and therefore can only be modified inside this component. The state is an object in your classical component that holds the variables and data that are essential to your application.

1. Describe props.

React has reusable components that need to access the state variables of the parent component. However, the state only belongs to the parent, so there needed to be a way for the data to go back and forth. This occurs through the props object. Props is passed to the component when it is created and it contains the attributes you passed to it during its creation. Props are read only, unlike the state.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

 A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. There are two categories of side effects in React components - those that don’t require clean-up and those that do require cleanup. When you utilize the useEffect hook from React, you can pass in dependencies in an array. This will cause the useEffect to be called and re-render the component each time this variable changes. 