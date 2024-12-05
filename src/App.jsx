import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import Friends from './pages/Friends';
import Leaderboard from './pages/Leaderboard';
import FinanceQuiz from './pages/FinanceQuiz';
import PopQuiz from './pages/PopQuiz';
import PoliticsQuiz from './pages/PoliticsQuiz';
import './index.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/quiz/finance" element={<FinanceQuiz />} />
          <Route path="/quiz/pop" element={<PopQuiz />} />
          <Route path="/quiz/politics" element={<PoliticsQuiz />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
