import React, {useState} from "react";

function App() {
  const questions = [
    {
      questionText: 'If soccer is called football in England, what is American football called in England?',
      answerOptions: [
        { answeText: 'American football' , isCorrect: false},
        { answeText: 'Combball', isCorrect: false},
        { answeText: 'Handball', isCorrect: false},
        { answeText: 'Touchdown', isCorrect: false},
      ]
    },
    {
      questionText: 'A doctor with a PhD is a doctor of what?',
      answerOptions: [
        { answeText: 'Philosophy' , isCorrect: false},
        { answeText: 'Psychology', isCorrect: false},
        { answeText: 'Phrenology', isCorrect: false},
        { answeText: 'Physical Therapy', isCorrect: false},
      ]
    },
    {
      questionText: 'What is the 100th digit of Pi?',
      answerOptions: [
        { answeText: '9' , isCorrect: false},
        { answeText: '4', isCorrect: false},
        { answeText: '7', isCorrect: false},
        { answeText: '2', isCorrect: false},
      ]
    },
    {
      questionText: 'An organic compound is considered an alcohol if it has what functional group?',
      answerOptions: [
        { answeText: 'Hydroxyl' , isCorrect: false},
        { answeText: 'Carbonyl', isCorrect: false},
        { answeText: 'Alkyl', isCorrect: false},
        { answeText: 'Aldehyde', isCorrect: false},
      ]
    },
    {
      questionText: 'What is the largest country in the world?',
      answerOptions: [
        { answeText: 'Russia' , isCorrect: false},
        { answeText: 'Canada', isCorrect: false},
        { answeText: 'China', isCorrect: false},
        { answeText: 'United States', isCorrect: false},
      ]
    },
  ]
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
