import React, { useState } from 'react';
import { GameState, Topic, Question, GameSession, LeaderboardEntry } from './types';
import { generateQuestion } from './services/geminiService';
import { Radar } from './components/Radar';
import { HealthBar } from './components/HealthBar';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const MAX_HEALTH = 100;
const DAMAGE_PER_HIT = 20;

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.MENU);
  const [session, setSession] = useState<GameSession>({
    score: 0,
    streak: 0,
    health: MAX_HEALTH,
    rank: 'Cadet',
    topic: Topic.MIXED,
    history: { questionCount: 0, correctCount: 0 }
  });
  
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'wrong', msg: string } | null>(null);
  const [playerName, setPlayerName] = useState("");
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  const calculateRank = (score: number) => {
    if (score < 50) return 'Cadet';
    if (score < 150) return 'Ensign';
    if (score < 300) return 'Lieutenant';
    if (score < 600) return 'Commander';
    return 'Admiral';
  };

  const startGame = (topic: Topic) => {
    if (!playerName.trim()) {
      alert("Identify yourself, Sailor!");
      return;
    }
    setSession({
      score: 0,
      streak: 0,
      health: MAX_HEALTH,
      rank: 'Cadet',
      topic: topic,
      history: { questionCount: 0, correctCount: 0 }
    });
    setGameState(GameState.PLAYING);
    loadNextQuestion(topic);
  };

  const loadNextQuestion = async (topic: Topic) => {
    setLoading(true);
    setFeedback(null);
    setCurrentQuestion(null);
    
    // Artificial delay for "Scanning" radar effect
    setTimeout(async () => {
      const q = await generateQuestion(topic);
      setCurrentQuestion(q);
      setLoading(false);
    }, 1200);
  };

  const handleAnswer = (selectedOption: string) => {
    if (!currentQuestion || feedback) return; // Prevent double clicks

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    const newHistory = {
      questionCount: session.history.questionCount + 1,
      correctCount: session.history.correctCount + (isCorrect ? 1 : 0)
    };

    if (isCorrect) {
      const streakBonus = Math.floor(session.streak / 3) * 10;
      const points = 10 + streakBonus;
      const newScore = session.score + points;
      
      setSession(prev => ({
        ...prev,
        score: newScore,
        streak: prev.streak + 1,
        rank: calculateRank(newScore),
        history: newHistory
      }));
      setFeedback({ type: 'correct', msg: `CORRECT! ${currentQuestion.explanation}` });
    } else {
      const newHealth = session.health - DAMAGE_PER_HIT;
      setSession(prev => ({
        ...prev,
        health: newHealth,
        streak: 0,
        history: newHistory
      }));
      setFeedback({ type: 'wrong', msg: `INCORRECT. ${currentQuestion.explanation}` });
    }
  };

  const handleNext = () => {
    if (session.health <= 0) {
      endGame();
    } else {
      loadNextQuestion(session.topic);
    }
  };

  const endGame = () => {
    setGameState(GameState.GAMEOVER);
    const newEntry: LeaderboardEntry = {
      name: playerName,
      score: session.score,
      rank: session.rank,
      date: new Date().toLocaleDateString()
    };
    
    // Simple in-memory leaderboard for the session
    setLeaderboard(prev => [...prev, newEntry].sort((a, b) => b.score - a.score).slice(0, 5));
  };

  // --------------------------------------------------------------------------
  // RENDERERS
  // --------------------------------------------------------------------------

  const renderMenu = () => (
    <div className="flex flex-col items-center justify-center h-full space-y-8 p-4 z-10 animate-fade-in">
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-6xl font-bold text-radar tracking-tighter drop-shadow-[0_0_10px_rgba(100,255,218,0.5)]">
          NAVAL ENGLISH TACTICS
        </h1>
        <p className="text-radar-dim text-lg tracking-widest">GRAMMAR SIMULATION MODULE v2.1</p>
      </div>

      <Radar />

      <div className="w-full max-w-md bg-navy-800 border border-radar p-6 rounded-sm shadow-lg">
        <label className="block text-radar text-sm mb-2 uppercase">Cadet Name</label>
        <input 
          type="text" 
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="ENTER NAME"
          className="w-full bg-navy-900 border border-radar-dim text-radar p-3 focus:outline-none focus:border-radar mb-6 uppercase"
        />

        <div className="space-y-2">
          <p className="text-radar-dim text-xs uppercase mb-1">Select Mission Parameter</p>
          {Object.values(Topic).map((t) => (
            <button
              key={t}
              onClick={() => startGame(t)}
              className="w-full text-left p-3 border border-radar-dim text-radar hover:bg-radar hover:text-navy-900 transition-colors uppercase text-sm font-bold truncate"
            >
              [SELECT] {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGame = () => (
    <div className="flex flex-col h-full max-w-4xl mx-auto p-4 relative z-10">
      {/* HUD Header */}
      <div className="flex justify-between items-end border-b border-radar-dim pb-4 mb-6">
        <div className="flex-1">
          <HealthBar current={session.health} max={MAX_HEALTH} />
          <div className="mt-2 text-xs text-radar-dim">RANK: <span className="text-radar text-base font-bold">{session.rank}</span></div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-mono text-radar font-bold">{session.score.toString().padStart(5, '0')}</div>
          <div className="text-xs text-radar-dim">SCORE</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {loading ? (
          <div className="text-center space-y-4">
            <div className="inline-block w-16 h-16 border-4 border-t-radar border-r-transparent border-b-radar border-l-transparent rounded-full animate-spin"></div>
            <p className="text-radar text-xl animate-pulse">SCANNING SECTOR...</p>
            <p className="text-radar-dim text-xs font-mono">Deciphering enemy transmissions</p>
          </div>
        ) : currentQuestion ? (
          <div className="w-full space-y-6">
            {/* Scenario Box */}
            <div className="bg-navy-800 border-l-4 border-radar p-6 shadow-lg">
              <h3 className="text-radar-dim text-xs uppercase tracking-widest mb-2">Incoming Transmission // Context</h3>
              <p className="text-xl md:text-2xl text-white font-mono leading-relaxed">
                "{currentQuestion.scenario}"
              </p>
            </div>

            {/* Question Box */}
            <div className="bg-navy-900 border border-radar-dim p-6">
              <h3 className="text-radar text-lg mb-4 font-bold">MISSION: {currentQuestion.questionText}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.options.map((opt, idx) => {
                  let btnClass = "border-radar-dim hover:bg-radar hover:text-navy-900 text-radar";
                  
                  if (feedback) {
                    if (opt === currentQuestion.correctAnswer) btnClass = "bg-radar text-navy-900 border-radar"; // Always show correct
                    else if (opt === feedback.msg && feedback.type === 'wrong') btnClass = "bg-alert text-white border-alert"; // Show wrong selection
                    else btnClass = "opacity-30 border-transparent"; // Fade others
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(opt)}
                      disabled={!!feedback}
                      className={`p-4 border text-left font-mono transition-all duration-200 uppercase text-lg ${btnClass}`}
                    >
                      {String.fromCharCode(65 + idx)}. {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feedback / Continue */}
            {feedback && (
              <div className={`p-4 border ${feedback.type === 'correct' ? 'border-radar bg-radar/10' : 'border-alert bg-alert/10'} flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in`}>
                <div>
                  <h4 className={`font-bold ${feedback.type === 'correct' ? 'text-radar' : 'text-alert'}`}>
                    {feedback.type === 'correct' ? 'TARGET NEUTRALIZED' : 'HULL BREACH DETECTED'}
                  </h4>
                  <p className="text-white text-sm">{feedback.msg}</p>
                </div>
                <button 
                  onClick={handleNext}
                  className="px-8 py-3 bg-white text-navy-900 font-bold hover:bg-gray-200 uppercase tracking-wider"
                >
                  {session.health <= 0 ? 'Report Status' : 'Next Sector'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-alert">COMMUNICATION ERROR. RETRY.</div>
        )}
      </div>
    </div>
  );

  const renderGameOver = () => {
    // Determine data for chart
    const data = [
      { name: 'Total', value: session.history.questionCount, fill: '#112240' },
      { name: 'Correct', value: session.history.correctCount, fill: '#64ffda' },
      { name: 'Missed', value: session.history.questionCount - session.history.correctCount, fill: '#ff5f5f' },
    ];

    return (
      <div className="flex flex-col items-center justify-center h-full p-4 space-y-6 z-10 animate-fade-in">
        <h2 className="text-5xl text-alert font-bold tracking-tighter">MISSION DEBRIEF</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Stats Card */}
          <div className="bg-navy-800 border border-radar p-6 space-y-4">
            <h3 className="text-radar text-xl uppercase border-b border-radar-dim pb-2">Officer Performance</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-radar-dim text-xs uppercase">Final Rank</div>
                <div className="text-2xl text-white font-bold">{session.rank}</div>
              </div>
              <div>
                <div className="text-radar-dim text-xs uppercase">Total Score</div>
                <div className="text-2xl text-radar font-bold">{session.score}</div>
              </div>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" stroke="#8892b0" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#020c1b', border: '1px solid #64ffda' }}
                    cursor={{fill: 'rgba(100,255,218,0.1)'}}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-navy-800 border border-radar-dim p-6">
            <h3 className="text-radar text-xl uppercase border-b border-radar-dim pb-2 mb-4">Session Leaderboard</h3>
            <div className="space-y-3">
              {leaderboard.map((entry, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm p-2 bg-navy-900 border-l-2 border-radar">
                  <span className="text-white font-mono">{idx + 1}. {entry.name}</span>
                  <div className="flex flex-col items-end">
                     <span className="text-radar font-bold">{entry.score}</span>
                     <span className="text-xs text-radar-dim">{entry.rank}</span>
                  </div>
                </div>
              ))}
              {leaderboard.length === 0 && <p className="text-radar-dim text-center py-4">No Data Recorded</p>}
            </div>
          </div>
        </div>

        <button 
          onClick={() => setGameState(GameState.MENU)}
          className="mt-8 px-10 py-4 bg-radar text-navy-900 font-bold text-xl hover:bg-white transition-colors uppercase tracking-widest"
        >
          Return to Base
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-navy-900 text-slate-200 font-mono relative overflow-hidden">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#64ffda 1px, transparent 1px), linear-gradient(90deg, #64ffda 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {gameState === GameState.MENU && renderMenu()}
      {gameState === GameState.PLAYING && renderGame()}
      {(gameState === GameState.GAMEOVER || gameState === GameState.LEADERBOARD) && renderGameOver()}
    </div>
  );
};

export default App;