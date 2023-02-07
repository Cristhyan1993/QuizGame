import React from 'react';
import QuestionCard from './components/QuestionCard';
import { useState } from 'react';
import { Difficulty, fetchQuizQuestions } from './API';
import { QuestionState } from './API';

const TOTAL_QUESTIONS = 10

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [game, setGameOver] = useState(true)

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia = async () => {;

  }

    const checkAnswer = (event: React.MouseEvent) => {

    }

    const nextQuestion = () => {

    }
  
  return (
    <div className="App">
      <h1>Quiz</h1>
      {/* <button className='start' onClick={startTrivia}>Start</button>
      <p>Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard questionNr={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number.answer].answers}
      userAnswer={userAnswer ? userAnswer[number] : undefined}
      callback={checkAnswer}></QuestionCard>
      <button className='next' onClick={nextQuestion}>Next Question</button> */}
    </div>
  );
}

export default App;
