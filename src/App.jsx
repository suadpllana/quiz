
import { useState } from "react";

import {popQuestions, programmingQuestions} from "./questions"
import {generalKnowledgeQuestions} from "./questions"
import {scienceQuestions} from "./questions"
import { sportsAndGamesQuestions } from "./questions";
import {historyQuestions} from "./questions"
import {foodAndDrinkQuestions} from "./questions"
import {triviaAndFunFactsQuestions} from "./questions"
import {mathematicsAndLogicQuestions} from "./questions"
import {personalityAndPsychologyQuestions} from "./questions"
import Quiz from './Quiz';
function App() {
  const [component, setComponent] = useState("");

  return (
    <>
      {!component && (
        <div className="quizContainer">
          <h1>Choose a Quiz Category</h1>
          <div className="quizCategory">
            <div onClick={() => setComponent("programming")}>
              <h2>💻Programming</h2>
            </div>
            <div onClick={() => setComponent("general")}>
              <h2>🧠General Knowledge</h2>
            </div>
            <div onClick={() => setComponent("science")}>
              <h2>💡Science and Technology</h2>
            </div>
            <div onClick={() => setComponent("history")}>
              <h2>🌍History and Geography</h2>
            </div>
            <div onClick={() => setComponent("pop")}>
              <h2>🎬Pop Culture (Movies, Music)</h2>
            </div>
            <div onClick={() => setComponent("sports")}>
              <h2>🏅Sports and Games</h2>
            </div>
            <div onClick={() => setComponent("food")}>
              <h2>🍽️Food and Drink</h2>
            </div>
            <div onClick={() => setComponent("trivia")}>
              <h2>🤔Trivia and Fun Facts</h2>
            </div>
            <div onClick={() => setComponent("math")}>
              <h2>
              🔢Mathematics and Logic</h2>
            </div>
            <div onClick={() => setComponent("personality")}>
              <h2>🌟Personality and Psychology</h2>
            </div>
          </div>
        </div>
      )}
      {component === "programming" && <Quiz emoji="💻" setComponent={setComponent} category={programmingQuestions} title="Programming" />}
      {component === "general" && <Quiz emoji="🧠" setComponent={setComponent} category={generalKnowledgeQuestions} title="General Knowledge" />}
      {component === "science" && <Quiz emoji="💡" setComponent={setComponent} category={scienceQuestions} title="Science and Technology"/>}
      {component === "history" && <Quiz emoji="🌍" setComponent={setComponent} category={historyQuestions} title={"History and Technology"}/>}
      {component === "pop" && <Quiz emoji="🎬" setComponent={setComponent} category={popQuestions} title={"Pop Culture"}/>}
      {component === "sports" && <Quiz emoji="🏅" setComponent={setComponent} category={sportsAndGamesQuestions} title="Sports and Games "/>}
      {component === "food" && <Quiz emoji="🍽️" setComponent={setComponent} category={foodAndDrinkQuestions} title="Food and Drinks "/>}
      {component === "trivia" && <Quiz emoji="🤔" setComponent={setComponent} category={triviaAndFunFactsQuestions} title="Trivia and Fun facts "/>}
      {component === "math" && <Quiz emoji="🔢" setComponent={setComponent} category={mathematicsAndLogicQuestions} title="Math and Logic "/>}
      {component === "personality" && <Quiz emoji="🔢" setComponent={setComponent} category={ personalityAndPsychologyQuestions} title="Personality and Psychology "/>}
     
      
    </>
  );
}

export default App;
