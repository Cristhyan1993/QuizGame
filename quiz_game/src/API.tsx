import { shuffleArray } from "./ultils"

export enum Difficulty {
    EASY="easy",
    MEDIUM= "medium",
    HARD="hard" 
}
export type Question = {
    category: string
    correct_answer: string
    dificulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type QuestionState = Question & {answers:string[]}

export const fetchQuizQuestions = async (amount:number, difficulty: Difficulty) => {
const response = await fetch(`http://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)
const data = await response.json()
console.log(data)

//add a new porperty of answers to the fetched data using the spread operator and .map
return data.results.map((question: Question) => (
    {
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer,])
    }
))

};

