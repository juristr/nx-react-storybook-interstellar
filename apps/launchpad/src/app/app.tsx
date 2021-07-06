import { Rocket } from '@interstellar/rocket';
import { LaunchButton } from '@interstellar/control-panel';
import { useState } from 'react';

export function App() {
  const [isRocketLaunching, setRocketLaunching] = useState(false);

  return (
    <main className="app-container">
      <div className="launch-pad-container">
        <div className="launch-pad-counter"></div>
        <div className="launch-pad-button">
          <LaunchButton onClick={() => setRocketLaunching(true)} />
        </div>
      </div>
      <div className="main-panel-container">
        <Rocket isLaunching={isRocketLaunching} />
        <p className="copyright">
          Rocket CSS animation kindly brought to you by{' '}
          <a href="https://codepen.io/eva_trostlos">Eva Letter</a> on{' '}
          <a href="https://codepen.io/eva_trostlos/pen/akQoLN">this Codepen.</a>
        </p>
      </div>
    </main>
  );
}

export default App;
