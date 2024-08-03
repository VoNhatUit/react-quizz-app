import React, { useState } from 'react';
import Questions from './components/Questions';
import Dashboard from './components/Dashboard';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizData, setQuizData] = useState(null);

  const handleStartQuiz = (data) => {
    setQuizData(data);
    setQuizStarted(true);
  };

  const handleAnswer = (answer: string) => {
    console.log('Selected answer:', answer);
    // Handle answer logic here
  };

  return (
    <div>
      {!quizStarted ? (
        <Dashboard onStart={handleStartQuiz} />
      ) : (
        <Questions
          question="In the television show 'Lazy Town', who is the actor of Robbie Rotten?"
          options={['Stefán Stefánsson', 'Adam Sandler', 'Magnús Scheving', 'Stephen Carl']}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
