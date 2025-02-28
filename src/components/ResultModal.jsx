import { forwardRef, useImperativeHandle, useRef, onReset } from "react";
import { createPortal } from "react-dom";  

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime },
  ref
) {
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const dialog = useRef();
  const score = Math.round((1 - (remainingTime / (targetTime * 1000)))* 100)

  const userLost = remainingTime <= 0;

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost </h2>}
      {!userLost && <h2>Your score: {score} </h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime}</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
