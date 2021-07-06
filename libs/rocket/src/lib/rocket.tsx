import './rocket.module.scss';
import logo from './logo.svg';

export interface RocketProps {
  isLaunching?: boolean;
}

export function Rocket(props: RocketProps) {
  return (
    <div className="rocket-container">
      <div className="rocket">
        <div className="rocket-body">
          <div className="body">
            <img src={logo} alt="Nrwl logo" className="logo" />
          </div>
          <div className="fin fin-left"></div>
          <div className="fin fin-right"></div>
          <div className="window"></div>
          {props.isLaunching && <div className="exhaust-flame"></div>}
        </div>
        {props.isLaunching && (
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
        )}
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
  );
}

export default Rocket;
