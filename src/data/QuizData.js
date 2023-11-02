const quizArray = [
  {
    question: "What does JSX stand for?",
    options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "Java Syntax Extension"],
    correctOption: "JavaScript XML"
  },
  {
    question: "Which lifecycle method is called after a component's output has been rendered to the DOM?",
    options: ["componentDidUpdate", "componentDidMount", "componentWillUnmount", "shouldComponentUpdate"],
    correctOption: "componentDidUpdate"
  },
  {
    question: "In React, which function is used to change the state and re-render the component?",
    options: ["changeState", "setState", "updateState", "modifyState"],
    correctOption: "setState"
  },
  {
    question: "What is the purpose of a key in React when rendering a list of elements?",
    options: [
      "It helps React identify which items have changed, added, or removed.",
      "It adds styling to the list items.",
      "It specifies the order of the list items.",
      "It provides a unique identifier for the component."
    ],
    correctOption: "It helps React identify which items have changed, added, or removed."
  },
  {
    question: "Which hook in React is used to perform side effects?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctOption: "useEffect"
  },
  {
    question: "What is the purpose of PropTypes in React?",
    options: [
      "To validate the types of props passed to a component.",
      "To define the shape of the component's state.",
      "To specify the order of rendering in a component.",
      "To define the CSS properties of a component."
    ],
    correctOption: "To validate the types of props passed to a component."
  },
  {
    question: "Which method is used to change the state in React class components?",
    options: ["setState", "changeState", "updateState", "modifyState"],
    correctOption: "setState"
  },
  {
    question: "What is the purpose of the virtual DOM in React?",
    options: [
      "To improve the performance of DOM updates.",
      "To create a visually appealing user interface.",
      "To handle asynchronous operations in components.",
      "To replace the need for HTML and CSS."
    ],
    correctOption: "To improve the performance of DOM updates."
  },
  {
    question: "What is the role of the render() method in a React component?",
    options: [
      "To return the JSX that represents the component's UI.",
      "To perform asynchronous operations and API calls.",
      "To define the component's lifecycle methods.",
      "To handle state changes within the component."
    ],
    correctOption: "To return the JSX that represents the component's UI."
  },
  {
    question: "In React, which hook is used for managing state in functional components?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctOption: "useState"
  },
  {
    question: "What is the purpose of conditional rendering in React?",
    options: [
      "To display different components or elements based on certain conditions.",
      "To improve the performance of rendering in functional components.",
      "To add animation effects to components.",
      "To handle form submissions in React applications."
    ],
    correctOption: "To display different components or elements based on certain conditions."
  },
  {
    question: "Which prop is used to pass data from parent to child components in React?",
    options: ["data", "childData", "props", "state"],
    correctOption: "props"
  }
];

export default quizArray;
