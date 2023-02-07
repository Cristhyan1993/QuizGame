import React from 'react'

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions:number
}
// React.FC tells react this is a functional component
//<Props> tells react we want to use the Props object
const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
    return(
        <div>
            <p className='number'>Question: {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback}></button>
                        <span dangerouslySetInnerHTML={{__html:answer}}/>
                    </div>)
                )}
            </div>
        </div>
    )

                }
export default QuestionCard