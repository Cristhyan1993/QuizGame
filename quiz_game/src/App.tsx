import React from 'react';
import QuestionCard from './components/QuestionCard';
import { useState } from 'react';
import { Difficulty, fetchQuizQuestions } from './API';
import { QuestionState } from './API';
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}
const TOTAL_QUESTIONS = 10

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true)

  console.log(questions)

  const startTrivia = async () => {;
   
    setLoading(true)
    setGameOver(false)
 //when the start button is pressed we trigger the fetch request
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
      if(!gameOver) {
       
        //user answer
 const answer = e.currentTarget.value
 // check answer against correct answer
 const correct = questions[number].correct_answer === answer;
 // Add score if answer is correct
 if(correct) setScore(prev => prev + 1)
 // save answer in the array for user answer
 const answerObject ={
  question: questions[number].question,
  answer,
  correct,
  correctAnswer: questions[number].correct_answer,
 }
 setUserAnswers((prev) => [...prev, answerObject])
      }

    }

    const nextQuestion = () => {
      //move on to the next question if not the last question
      const nextQuestion = number + 1

      if(nextQuestion===TOTAL_QUESTIONS) {
        setGameOver(true)
        
      } else {
        setNumber(nextQuestion)
      }

    }
  
  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <h1>Quiz</h1>
      {gameOver || userAnswer.length === TOTAL_QUESTIONS? (
<button className='start' onClick={startTrivia}>Start</button>
      ) : null}
       
      {!gameOver?<p>Score:{score}</p>:null}
      {loading&&<p>Loading Questions...</p>}

      {!loading && !gameOver && (
      <QuestionCard
      questionNr={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswer ? userAnswer[number] : undefined}
      callback={checkAnswer}></QuestionCard>)}

      {!gameOver && !loading && userAnswer.length === number + 1 && number !== TOTAL_QUESTIONS?(
      <button className='next' onClick={nextQuestion}>Next Question</button>):null}
    </Wrapper>
    </>
  );
}

export default App;
