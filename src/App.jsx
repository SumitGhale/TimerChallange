import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title = "Easy"  targetTime={1} />
        <TimerChallange title = "Not Easy"  targetTime={5} />
        <TimerChallange title = "Getting TOugh"  targetTime={10} />
        <TimerChallange title = "Pro's only"  targetTime={15} />
      </div>
    </>
  );
}

export default App;
