import { Scoreboard } from "../Scoreboard/Scoreboard.tsx";
import type { ScoreboardProps } from "../../types/scoreboard.ts";
import "./AppHeader.css";

export const AppHeader = ({ score, highScore }: ScoreboardProps) => {
  return (
    <>
      <div className="app-header">
        <h1>Pokemon Memory Game</h1>
        <p>
          Click each Pokémon only once — clicking the same one twice resets your score.
        </p>
        <Scoreboard score={score} highScore={highScore} />
      </div>
    </>
  );
};
