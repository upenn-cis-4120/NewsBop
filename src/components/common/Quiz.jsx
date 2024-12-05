import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import './Quiz.css';

const Quiz = ({ 
  category,
  title,
  subtitle,
  imageUrl,
  imageCaption,
  articleText,
  question,
  answers,
  correctAnswerIndex
}) => {
  const navigate = useNavigate();
  const { updateCategoryStreak } = useApp();
  const [showQuiz, setShowQuiz] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [showResult, setShowResult] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    let timer;
    if (showQuiz && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimeout();
    }
    return () => clearInterval(timer);
  }, [showQuiz, timeLeft]);

  const handleTimeout = () => {
    updateCategoryStreak(category, false);
    setResultMessage("Time's up! 😢");
    setShowResult(true);
    setTimeout(() => {
      hideQuiz();
    }, 2000);
  };

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    const isCorrect = index === correctAnswerIndex;
    updateCategoryStreak(category, isCorrect);
    setResultMessage(isCorrect ? 'Correct! 🎉' : 'Wrong Answer 😢');
    setShowResult(true);
    setTimeout(() => {
      hideQuiz();
    }, 2000);
  };

  const showQuizPanel = () => {
    setShowQuiz(true);
    setTimeLeft(20);
    setShowResult(false);
    setResultMessage('');
  };

  const hideQuiz = () => {
    setShowQuiz(false);
    setSelectedAnswer(null);
    navigate('/');
  };

  return (
    <div className="quiz-page">
    <div className="content">
        <h1 className="title">{title}</h1>
        <div className="subtitle">{subtitle}</div>
        
        <img src={imageUrl} alt={title} className="article-image" />
        <div className="image-caption">{imageCaption}</div>
        
        {Array.isArray(articleText) ? (
        articleText.map((paragraph, index) => (
            <div key={index} className="article-text">{paragraph}</div>
        ))
        ) : (
        <div className="article-text">{articleText}</div>
        )}
    </div>

    {!showQuiz && (
        <div className="quiz-button" onClick={showQuizPanel}>
        <span>QUIZ</span>
        </div>
    )}

    <div className={`quiz-panel ${showQuiz ? 'active' : ''}`}>
        <div className="quiz-header">
        <button className="back-button" onClick={hideQuiz}>
            <i className="fas fa-chevron-left"></i>
        </button>
        <div className="timer">
            <i className="fas fa-clock"></i> {timeLeft}
        </div>
        </div>
        
        <div className="question">Q: {question}</div>
        
        {showResult && (
          <div className={`result-message visible ${resultMessage.includes('Correct') ? 'correct' : 'wrong'}`}>
            {resultMessage}
          </div>
        )}

        <div className="answers">
          {answers.map((answer, index) => (
            <button
              key={index}
              className={`answer ${
                showResult && index === correctAnswerIndex ? 'correct' : ''
              } ${
                showResult && selectedAnswer === index && index !== correctAnswerIndex ? 'wrong' : ''
              } ${showResult ? 'disabled' : ''}`}
              disabled={showResult}
              onClick={() => handleAnswer(index)}
            >
              {answer}
            </button>
          ))}
        </div>
    </div>
    </div>
  );
};

export default Quiz;
