import { useContext } from 'react';
import Play from 'pages/play';
import HowTo from 'pages/howto';
import HighScores from 'pages/highscores';
import { menuContext } from 'providers/NavProvider';
import 'App.css';

export default function App() {
  const { selector, onPlay, onHowTo, onHighScores } = useContext(menuContext);
  
  return (
    <div className="App">
      <h1>My App</h1>
      {selector === "play" && <Play />}
      {selector === "howto" && <HowTo />}
      {selector === "highscores" && <HighScores />}
      
    </div>
  );
}
