import React, {useState} from "react";

function App() {
  
  const [ currentQuestionOn, setQuestion ] = useState(1);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

  const UponButtonClick = (isCorrect) => {
    if(isCorrect){
      setScore(score+1);
    }
    const nextQuestion = currentQuestionOn + 1;
    if(nextQuestion< questions.length){
    setQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  };

  const questions = [
    {
      questionText: 'If soccer is called football in England, what is American football called in England?',
      answerOptions: [
        { answeText: 'American football' , isCorrect: true},
        { answeText: 'Combball', isCorrect: false},
        { answeText: 'Handball', isCorrect: false},
        { answeText: 'Touchdown', isCorrect: false},
      ]
    },
    {
      questionText: 'A doctor with a PhD is a doctor of what?',
      answerOptions: [
        { answeText: 'Philosophy' , isCorrect: true},
        { answeText: 'Psychology', isCorrect: false},
        { answeText: 'Phrenology', isCorrect: false},
        { answeText: 'Physical Therapy', isCorrect: false},
      ]
    },
    {
      questionText: 'What is the 100th digit of Pi?',
      answerOptions: [
        { answeText: '9' , isCorrect: true},
        { answeText: '4', isCorrect: false},
        { answeText: '7', isCorrect: false},
        { answeText: '2', isCorrect: false},
      ]
    },
    {
      questionText: 'An organic compound is considered an alcohol if it has what functional group?',
      answerOptions: [
        { answeText: 'Hydroxyl' , isCorrect: true},
        { answeText: 'Carbonyl', isCorrect: false},
        { answeText: 'Alkyl', isCorrect: false},
        { answeText: 'Aldehyde', isCorrect: false},
      ]
    },
    {
      questionText: 'What is the largest country in the world?',
      answerOptions: [
        { answeText: 'Russia' , isCorrect: true},
        { answeText: 'Canada', isCorrect: false},
        { answeText: 'China', isCorrect: false},
        { answeText: 'United States', isCorrect: false},
      ]
    },
  ]
  return (
    <div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-text'>{questions[currentQuestionOn].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestionOn].answerOptions.map((answerOption, index) => (
              	<button onClick={() => UponButtonClick(answerOption.isCorrect)}>{answerOption.answeText}</button>
            ))}
					
					</div>
				</>
			)}
		</div>
  );
}

export default App;
