import React from 'react'
import {useState, useEffect} from "react"


const Quiz = ({category , title , setComponent, emoji}) => {
   const [currentQuestionIndex , setCurrentQuestionIndex] = useState(0)
     const [lock,setLock ] = useState(false)
     const [showResult , setShowResult] = useState(false)
     const [score , setScore] = useState(0)
     const [seconds , setSeconds] = useState(100);

     useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prev) => {
                const newSeconds = prev - 1;
                if (newSeconds === 0) {
                    setShowResult(true);
                }
                return newSeconds;
            });
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, [seconds]); 
    
 
 
     function nextQuestion(){
         if(currentQuestionIndex >= category.length - 1){
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
             if(category[currentQuestionIndex].correctAnswer === ans){
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
         setSeconds(100)
     }
    
 
 
   return (
     <div className="bg-white  mx-auto min-h-[20rem] h-auto mt-20 rounded-lg text-center  font-sans w-full sm:w-auto md:w-3/5 lg:w-2/5">
         <h1 className="text-3xl font-bold">{emoji}{title} Quiz</h1>
         {!showResult &&
         <p>Time Remaining: {seconds}</p>
         }
         
         <br />
         <hr /><br />
         {!showResult ?     
         <>
         <h2 className="text-2xl font-bold">{category[currentQuestionIndex].question}</h2>
       <button className="button_array w-full h-10 border-2 border-gray-500 cursor-pointer text-left text-xl mb-5" onClick={(e) => checkAns(e,0)}>{category[currentQuestionIndex].answer1}</button><br />
       <button className="button_array w-full h-10 border-2 border-gray-500 cursor-pointer text-left text-xl mb-5" onClick={(e) => checkAns(e,1)}>{category[currentQuestionIndex].answer2}</button><br />
       <button className="button_array w-full h-10 border-2 border-gray-500 cursor-pointer text-left text-xl mb-5" onClick={(e) => checkAns(e,2)}>{category[currentQuestionIndex].answer3}</button><br />
       <button className="button_array w-full h-10 border-2 border-gray-500 cursor-pointer text-left text-xl mb-5" onClick={(e) => checkAns(e,3)}>{category[currentQuestionIndex].answer4}</button>
       <button className="button_array w-full h-10 border-2 border-gray-500 cursor-pointer text-left text-xl mb-5" onClick={nextQuestion} className="w-24 h-8 bg-blue-800 text-white border-none rounded text-lg text-center  hover:opacity-70">Next</button>
     
       <p>{currentQuestionIndex + 1} / {category.length} questions</p>
       </>: <></>}
 
       {showResult ? 
       <>
         <h2>You scored {score} / {category.length}</h2>
         <button onClick={reset} className="w-24 h-8 bg-blue-800 text-white border-none rounded text-lg text-center  hover:opacity-70">Reset</button></>
       
     
     : <></>}
     <br />
     <a  className="homepage" onClick={() => setComponent("")} href="">Go back to homepage</a>
     </div>
   )
}

export default Quiz
