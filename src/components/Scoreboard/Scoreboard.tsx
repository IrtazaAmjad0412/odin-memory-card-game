import type { ScoreboardProps } from "../../types/scoreboard.ts";
import "./Scoreboard.css";

export const Scoreboard = ({ score, highScore }: ScoreboardProps) => {
  return (
    <div className="scoreboard">
      <h2>High Score: {highScore}</h2>
      <h2>Current Score: {score}</h2>
    </div>
  );
};
