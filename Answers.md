# Answers

1.  What is React JS and what problems does it try and solve?

ReactJS is one of the most popular libraries, courtesy of Facebook, for building web applications. It solves many of the problems that arise with intense user interfaces, such as ever-changing data and multiple users interacting. It allows for reusable components to get and alter the data of the state and then React takes care of adjusting re-rendering the DOM when needed.

1.  What does it mean to _think_ in react?

In order to think in React, you must first break your user interface down into a component hierarchy, keeping in mind that a component should ideally only do one thing. You then think about what data and functionality you need and where. This allows you to determine where the state should be managed and then what props are needed to pass around necessary data (inverse data flow and props drilling). 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

Class components, in React, require you to extend the React.Component; they require you to use a constructor (although React can do this for you behind the scenes); and they require you to use a render() function in order to indiciate what you want displayed. A functional component simply requires a return statement to do this. 

1.  Describe state.

The state belongs to the component in which it is declared, and therefore can only be modified inside this component. The state is an object in your classical component that holds the variables and data that are essential to your application. 

1.  Describe props.

React has reusable components that need to access the state variables of the parent component. However, the state only belongs to the parent, so there needed to be a way for the data to go back and forth. This occurs through the props object. Props is passed to the component when it is created and it contains the attributes you passed to it during its creation. Props are read only, unlike the state. 