const questions = [
  {
    questionText: "1. *What is React?* ",
    answeroptions: [
      {
        answerText: "A JavaScript library for building user interfaces  ",
        isCorrect: true,
      },
      { answerText: "A CSS framework ", isCorrect: false },
      { answerText: "A database management system", isCorrect: false },
      { answerText: "A programming language", isCorrect: false },
    ],
  },
  {
    questionText: "*Who developed React?* ",
    answeroptions: [
      { answerText: "Google ", isCorrect: false },
      { answerText: "Facebook (Meta)", isCorrect: true },
      { answerText: "Microsoft ", isCorrect: false },
      { answerText: "Twitter ", isCorrect: false },
    ],
  },
  {
    questionText:
      "3. *What is the latest stable version of React as of 2024?* ",
    answeroptions: [
      { answerText: "18", isCorrect: false },
      { answerText: "17", isCorrect: false },
      { answerText: "18", isCorrect: false },
      { answerText: "19", isCorrect: true },
    ],
  },
  {
    questionText:
      "3. *What is the latest stable version of React as of 2024?* ",
    answeroptions: [
      { answerText: "18", isCorrect: false },
      { answerText: "17", isCorrect: false },
      { answerText: "18", isCorrect: false },
      { answerText: "19", isCorrect: true },
    ],
  },
  {
    questionText: "4. *What is JSX in React?* ",
    answeroptions: [
      { answerText: "JavaScript Extension ", isCorrect: true },
      { answerText: "Java XML", isCorrect: false },
      { answerText: "A templating language ", isCorrect: false },
      { answerText: "A CSS preprocessor  ", isCorrect: false },
    ],
  },
  {
    questionText:
      "5. *Which method is used to create a new React component?*  ",
    answeroptions: [
      { answerText: "React.createClass()", isCorrect: false },
      { answerText: "React.createComponent()", isCorrect: false },
      { answerText: "React.Component", isCorrect: true },
      { answerText: " React.createElement()", isCorrect: false },
    ],
  },
  {
    questionText: "6. *React is based on which architecture?* ",
    answeroptions: [
      { answerText: "MVC", isCorrect: false },
      { answerText: "MVVM", isCorrect: false },
      { answerText: "Component-based architecture", isCorrect: true },
      { answerText: "Monolithic architecture", isCorrect: false },
    ],
  },
  {
    questionText: "7. *Which function component syntax is correct?*",
    answeroptions: [
      {
        answerText: "function MyComponent() { return <h1>Hello</h1>; }",
        isCorrect: false,
      },
      {
        answerText: "const MyComponent = () => <h1>Hello</h1>;  ",
        isCorrect: false,
      },
      { answerText: "Both a and b", isCorrect: true },
      { answerText: "None of the above", isCorrect: false },
    ],
  },
  {
    questionText: "8. *What is the primary purpose of props in React?*  ",
    answeroptions: [
      { answerText: "To store local component state ", isCorrect: false },
      {
        answerText: "To pass data from parent to child component",
        isCorrect: true,
      },
      { answerText: "To manage side effects", isCorrect: false },
      { answerText: "To handle HTTP requests", isCorrect: false },
    ],
  },
  {
    questionText: "9. *How are props passed in a React component?* ",
    answeroptions: [
      { answerText: "<Component props='value' />", isCorrect: false },
      { answerText: "<Component {props} /> ", isCorrect: false },
      { answerText: "<Component propName='value' /> ", isCorrect: true },
      { answerText: "<Component.propName = 'value' />  ", isCorrect: false },
    ],
  },
  {
    questionText: "10. *Can props be modified inside a child component?* ",
    answeroptions: [
      { answerText: "Yes", isCorrect: false },
      { answerText: "No", isCorrect: true },
    ],
  },
];

export default questions;
