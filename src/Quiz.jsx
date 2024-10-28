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
    <div className="bg-white w-2/5 mx-auto min-h-[20rem] h-auto mt-20 rounded-lg text-center font-sans">
        <h1 className="text-3xl font-bold">Programming Quiz</h1>
        <br />
        <hr /><br />
        {!showResult ?     
        <>
        <h2 className="text-2xl font-bold">{questions[currentQuestionIndex].question}</h2>
      <button className="button_array w-full h-10 border-2 border-gray-500 cursor-pointer text-left text-xl mb-5" onClick={(e) => checkAns(e,0)}>{questions[currentQuestionIndex].answer1}</button><br />
      <button className="button_array w-full h-10 border-2 border-gray-500 cursor-pointer text-left text-xl mb-5" onClick={(e) => checkAns(e,1)}>{questions[currentQuestionIndex].answer2}</button><br />
      <button className="button_array w-full h-10 border-2 border-gray-500 cursor-pointer text-left text-xl mb-5" onClick={(e) => checkAns(e,2)}>{questions[currentQuestionIndex].answer3}</button><br />
      <button className="button_array w-full h-10 border-2 border-gray-500 cursor-pointer text-left text-xl mb-5" onClick={(e) => checkAns(e,3)}>{questions[currentQuestionIndex].answer4}</button>
      <button className="button_array w-full h-10 border-2 border-gray-500 cursor-pointer text-left text-xl mb-5" onClick={nextQuestion} className="w-24 h-8 bg-blue-800 text-white border-none rounded text-lg text-center  hover:opacity-70">Next</button>
    
      <p>{currentQuestionIndex + 1} / {questions.length} questions</p>
      </>: <></>}

      {showResult ? 
      <>
        <h2>You scored {score} / {questions.length}</h2>
        <button onClick={reset} className="w-24 h-8 bg-blue-800 text-white border-none rounded text-lg text-center  hover:opacity-70">Reset</button></>
      
    
    : <></>}
    
    </div>
  )
}

export default Quiz
