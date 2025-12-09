import type { WinModalProps } from "../../types/winModal";
import "./WinModal.css";

export const WinModal = ({ restartGame }: WinModalProps) => {
  return (
    <div className="win-modal">
      <p>You Won!</p>
      <button onClick={restartGame}>Play Again</button>
    </div>
  );
};
