'use client';

import { useState, useEffect } from 'react';
import './styles.css';

export default function Home() {
  const [scene, setScene] = useState(0);
  const [sparkles, setSparkles] = useState([]);
  const [catMood, setCatMood] = useState('happy');

  const scenes = [
    {
      title: "बिल्ली की कहानी",
      subtitle: "The Magical Cat Story",
      dialogue: "नमस्ते! मेरा नाम मिट्ठू है!",
      translation: "Hello! My name is Mitthu!",
      cat: "😺",
      bg: "#FFE5B4"
    },
    {
      title: "जादुई रात",
      subtitle: "The Magical Night",
      dialogue: "आज रात कुछ जादू होने वाला है!",
      translation: "Tonight something magical will happen!",
      cat: "🌟😸",
      bg: "#E6E6FA"
    },
    {
      title: "चंदा मामा",
      subtitle: "Moon Uncle",
      dialogue: "चंदा मामा दूर के, पकाएं बड़े प्यार के!",
      translation: "Dear Moon Uncle far away, cook with love I say!",
      cat: "🌙😻",
      bg: "#191970"
    },
    {
      title: "नाच रही बिल्ली",
      subtitle: "The Dancing Cat",
      dialogue: "नाचो, नाचो, खुशी से नाचो!",
      translation: "Dance, dance, dance with joy!",
      cat: "💃😹",
      bg: "#FF69B4"
    },
    {
      title: "दोस्ती",
      subtitle: "Friendship",
      dialogue: "सारे बिल्ली मेरे दोस्त हैं!",
      translation: "All cats are my friends!",
      cat: "😺😸😻",
      bg: "#98FB98"
    },
    {
      title: "धन्यवाद!",
      subtitle: "Thank You!",
      dialogue: "फिर मिलेंगे! अलविदा!",
      translation: "See you again! Goodbye!",
      cat: "👋😺✨",
      bg: "#FFD700"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 10,
        duration: Math.random() * 2 + 1
      };
      setSparkles(prev => [...prev.slice(-20), newSparkle]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moods = ['happy', 'excited', 'curious', 'playful'];
    const interval = setInterval(() => {
      setCatMood(moods[Math.floor(Math.random() * moods.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nextScene = () => {
    setScene((prev) => (prev + 1) % scenes.length);
  };

  const prevScene = () => {
    setScene((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  const currentScene = scenes[scene];

  return (
    <div className="container" style={{ background: currentScene.bg }}>
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDuration: `${sparkle.duration}s`
          }}
        >
          ✨
        </div>
      ))}

      <div className="content">
        <div className="header bounce">
          <h1 className="title-hindi">{currentScene.title}</h1>
          <h2 className="title-english">{currentScene.subtitle}</h2>
        </div>

        <div className={`cat-container ${catMood}`}>
          <div className="cat-character">
            {currentScene.cat}
          </div>
          <div className="cat-shadow"></div>
        </div>

        <div className="dialogue-box">
          <div className="dialogue-hindi">{currentScene.dialogue}</div>
          <div className="dialogue-english">{currentScene.translation}</div>
        </div>

        <div className="controls">
          <button onClick={prevScene} className="btn btn-prev">
            ← पीछे (Back)
          </button>
          <div className="scene-counter">
            {scene + 1} / {scenes.length}
          </div>
          <button onClick={nextScene} className="btn btn-next">
            आगे (Next) →
          </button>
        </div>

        <div className="decorations">
          <div className="star">⭐</div>
          <div className="star">🌟</div>
          <div className="star">✨</div>
          <div className="heart">💖</div>
          <div className="heart">💕</div>
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition: background 0.8s ease;
          font-family: 'Arial', sans-serif;
        }

        .content {
          z-index: 10;
          text-align: center;
          padding: 2rem;
          max-width: 800px;
        }

        .header {
          margin-bottom: 3rem;
        }

        .title-hindi {
          font-size: 3.5rem;
          color: #FF1493;
          text-shadow: 3px 3px 6px rgba(0,0,0,0.3);
          margin: 0;
          font-weight: bold;
        }

        .title-english {
          font-size: 2rem;
          color: #4169E1;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          margin: 0.5rem 0;
          font-style: italic;
        }

        .cat-container {
          margin: 2rem 0;
          position: relative;
        }

        .cat-character {
          font-size: 8rem;
          animation: float 3s ease-in-out infinite;
          display: inline-block;
          filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.3));
        }

        .cat-container.happy .cat-character {
          animation: float 3s ease-in-out infinite, wiggle 1s ease-in-out infinite;
        }

        .cat-container.excited .cat-character {
          animation: bounce 0.5s ease-in-out infinite;
        }

        .cat-container.playful .cat-character {
          animation: spin 2s linear infinite;
        }

        .cat-shadow {
          width: 150px;
          height: 30px;
          background: rgba(0,0,0,0.3);
          border-radius: 50%;
          margin: 0 auto;
          animation: shadowPulse 3s ease-in-out infinite;
        }

        .dialogue-box {
          background: white;
          border-radius: 30px;
          padding: 2rem;
          margin: 2rem auto;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          border: 5px solid #FFD700;
          animation: glow 2s ease-in-out infinite;
          max-width: 600px;
        }

        .dialogue-hindi {
          font-size: 2rem;
          color: #FF4500;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .dialogue-english {
          font-size: 1.3rem;
          color: #008080;
          font-style: italic;
        }

        .controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .btn {
          padding: 1rem 2rem;
          font-size: 1.3rem;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .btn-prev {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-next {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }

        .btn:hover {
          transform: scale(1.1) rotate(2deg);
          box-shadow: 0 8px 25px rgba(0,0,0,0.4);
        }

        .btn:active {
          transform: scale(0.95);
        }

        .scene-counter {
          font-size: 1.5rem;
          color: white;
          background: rgba(0,0,0,0.5);
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-weight: bold;
        }

        .decorations {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 5;
        }

        .star, .heart {
          position: absolute;
          font-size: 3rem;
          animation: float 4s ease-in-out infinite;
        }

        .star:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .star:nth-child(2) {
          top: 20%;
          right: 15%;
          animation-delay: 1s;
        }

        .star:nth-child(3) {
          bottom: 20%;
          left: 20%;
          animation-delay: 2s;
        }

        .heart:nth-child(4) {
          top: 60%;
          right: 10%;
          animation-delay: 0.5s;
        }

        .heart:nth-child(5) {
          bottom: 15%;
          right: 25%;
          animation-delay: 1.5s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }

        @keyframes shadowPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 10px 30px rgba(255,215,0,0.5); }
          50% { box-shadow: 0 10px 50px rgba(255,215,0,0.8); }
        }

        @media (max-width: 768px) {
          .title-hindi { font-size: 2.5rem; }
          .title-english { font-size: 1.5rem; }
          .cat-character { font-size: 5rem; }
          .dialogue-hindi { font-size: 1.5rem; }
          .dialogue-english { font-size: 1rem; }
          .controls { flex-direction: column; gap: 1rem; }
        }
      `}</style>
    </div>
  );
}
