import React from 'react'
import { questions } from './questions'
import {useState , useEffect} from "react"

const Quiz = () => {

    const [currentQuestionIndex , setCurrentQuestionIndex] = useState(0)
    const [lock,setLock ] = useState(false)
    const [showResult , setShowResult] = useState(false)
    const [score , setScore] = useState(0)


    function nextQuestion(){
        if(currentQuestionIndex >= questions.length - 1){
            setShowResult(true)
        }
        else{
            setCurrentQuestionIndex(prev => prev + 1);
            setLock(false)
            const button_array = document.getElementsByClassName("button_array");
            for(let i = 0; i < button_array.length; i++){
                button_array[i].classList.remove("correct");
                button_array[i].classList.remove("wrong")
            }
        
        }
      
    }
    
    function checkAns(e,ans){
        if(!lock){
            if(questions[currentQuestionIndex].correctAnswer === ans){
                e.target.classList.add("correct")
                setLock(true)
                setScore(prev => prev + 1)
            }
            else{
                e.target.classList.add("wrong");
                setLock(true)
            }
        }
      
    }
    function reset(){
        setCurrentQuestionIndex(0)
        setLock(false)
        setShowResult(false)
        setScore(0)
    }


  return (
    <div className="container">
        <h1>Programming Quiz</h1>
        <hr />
        {!showResult ?     
        <>
        <h2>{questions[currentQuestionIndex].question}?</h2>
      <button className="button_array" onClick={(e) => checkAns(e,0)}>{questions[currentQuestionIndex].answer1}</button><br />
      <button className="button_array" onClick={(e) => checkAns(e,1)}>{questions[currentQuestionIndex].answer2}</button><br />
      <button className="button_array" onClick={(e) => checkAns(e,2)}>{questions[currentQuestionIndex].answer3}</button><br />
      <button className="button_array" onClick={(e) => checkAns(e,3)}>{questions[currentQuestionIndex].answer4}</button>
      <button className="button_array" onClick={nextQuestion} className="next">Next</button>
    
      <p>{currentQuestionIndex + 1} / {questions.length} questions</p>
      </>: <></>}

      {showResult ? 
      <>
        <h2>You scored {score} / {questions.length}</h2>
        <button onClick={reset} className="next">Reset</button></>
      
    
    : <></>}
    
    </div>
  )
}

export default Quiz
