import logo from './logo.svg';

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
        <div className="rocket-container">
          <div className="rocket">
            <div className="rocket-body">
              <div className="body">
                <img src={logo} className="logo" />
              </div>
              <div className="fin fin-left"></div>
              <div className="fin fin-right"></div>
              <div className="window"></div>
              <div className="exhaust-flame"></div>
            </div>
            <ul className="exhaust-fumes">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className="star">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
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
