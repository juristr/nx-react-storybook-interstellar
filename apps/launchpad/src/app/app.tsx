import { Rocket } from '@interstellar/rocket';

export function App() {
  return (
    <main className="app-container">
      <div className="launch-pad-container">
        <div className="launch-pad-counter"></div>
        <div className="launch-pad-button">
          <div className="button">Launch</div>
        </div>
      </div>
      <div className="main-panel-container">
        <Rocket />
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
