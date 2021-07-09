import styles from './rocket.module.scss';
// import './rocket.scss';
import logo from './logo.svg';

export interface RocketProps {
  isLaunching?: boolean;
}

export function Rocket(props: RocketProps) {
  console.log(styles);
  return (
    <div className={styles['rocket-container']} data-testing="rocket">
      <div className={styles.rocket}>
        <div
          className={`${styles['rocket-body']} ${
            props.isLaunching ? styles['rocket-bouncing'] : ''
          }`}
        >
          <div className={styles.body}>
            <img src={logo} alt="Nrwl logo" className={styles.logo} />
          </div>
          <div className={`${styles.fin} ${styles['fin-left']}`}></div>
          <div className={`${styles.fin} ${styles['fin-right']}`}></div>
          <div className={styles.window}></div>
          {props.isLaunching && <div className={styles['exhaust-flame']}></div>}
        </div>
        {props.isLaunching && (
          <>
            <ul className={styles['exhaust-fumes']} data-testing="rocket-fumes">
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
            <ul className={styles.star} data-testing="stars">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Rocket;
